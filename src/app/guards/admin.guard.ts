import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from "@angular/router";
import { catchError, map, Observable, of, throwError } from 'rxjs'
import { GetUserResponseDto } from "../services/dto/get-user-response.dto";
import { UsersService } from "../services/users.service";

@Injectable({
    providedIn: 'root'
})
export class CanActivateAdmin {

    canActivate(usersService: UsersService, router: Router): Observable<boolean|UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return usersService.getUser().pipe(
        catchError(error => {
            return of(null)
        }),
        map((user: GetUserResponseDto | null) => {
            console.error("user", user)
            if (!user) {
                return router.createUrlTree(['auth'], {queryParams: {'redirect_to': 'admin'}});
            }
            if (!user.isAdmin) return router.createUrlTree(['']);
            return true
        })
    )
    }
}


export const canActivateAdmin: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.error(route)
      return inject(CanActivateAdmin).canActivate(inject(UsersService), inject(Router));
};