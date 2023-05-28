import { Component } from '@angular/core';
import { GetUserResponseDto } from 'src/app/services/dto/get-user-response.dto';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  user$: Observable<GetUserResponseDto | null> = this.usersService.user

  constructor (
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  logout() {
    this.authService.logout()
    window.location.reload();
  }

}
