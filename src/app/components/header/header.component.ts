import { Component, OnInit } from '@angular/core';
import { GetUserResponseDto } from 'src/app/services/dto/get-user-response.dto';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$: Observable<GetUserResponseDto | null> = this.usersService.user

  constructor(private usersService: UsersService) {}

}
