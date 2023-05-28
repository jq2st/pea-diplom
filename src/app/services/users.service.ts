import { Injectable } from '@angular/core';
import { GetUserResponseDto } from './dto/get-user-response.dto';
import { UsersApiService } from './users-api.service';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: BehaviorSubject<GetUserResponseDto | null> = new BehaviorSubject<GetUserResponseDto | null>(null)

  constructor(
    private usersApiService: UsersApiService
  ) { }

  async setUser(): Promise<void> {
    const user = await firstValueFrom(this.usersApiService.self())
    console.error(user)
    this.user.next(user)
  }

  getUser(): Observable<GetUserResponseDto> {
    return this.usersApiService.self()
  }

}
