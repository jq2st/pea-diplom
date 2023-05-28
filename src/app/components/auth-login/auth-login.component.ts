import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostLoginRequestDto } from 'src/app/services/dto/post-login-request.dto';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError } from 'rxjs/operators'
import { Subscription, throwError } from 'rxjs'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy {

  form: FormGroup
  isDisabled: boolean = false
  isError: boolean = false
  redirectUrl = ''

  private _subscription$ = new Subscription()

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private authApiService: AuthApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: Params) => {
      const redirectTo = query['redirect_to']
      if (redirectTo) {
        this.redirectUrl = redirectTo
      }
    })
  }

  login(): void {
    this.isDisabled = true
    const body: PostLoginRequestDto = {
      ...this.form.value
    }
    const loginSubscription$ = this.authApiService.login(body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    ).subscribe({
      error: (error: HttpErrorResponse) => {
        this.isDisabled = false
        this.isError = true
      },
      next: (response: HttpResponse<{token: string}>) => {
        this.isDisabled = false
        this.form.reset()
        console.error(response)
        if (!response.body) return;
        this.authService.updateToken(response.body.token)
        this.usersService.setUser().then(() => {
          this.router.navigate([this.redirectUrl])
        })
      }
    })
    this._subscription$.add(loginSubscription$)
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe()
  }
}
