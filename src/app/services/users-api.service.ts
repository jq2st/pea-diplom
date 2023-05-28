import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { GetUsersResponseDto } from './dto/get-users-response.dto';
import { GetUserResponseDto } from './dto/get-user-response.dto';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  private _api = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) { }

  self(): Observable<GetUserResponseDto> {
    const result = this.http.get<GetUserResponseDto>(`${this._api}/self`)
    return result
  }

  getUsers() {
    const result = this.http.get<GetUsersResponseDto>(`${this._api}`)
    return result
  }

}
