import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { PostLoginRequestDto } from './dto/post-login-request.dto';
import { PostAuthRegistrationRequestDto } from './dto/post-auth-registration-request.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  api = '/api/auth'

  constructor(private http: HttpClient) { }

  login(data: PostLoginRequestDto): Observable<HttpResponse<{token: string}>> {
    const result = this.http.post<{token: string}>(`${this.api}/login`, data, {observe: 'response'})
    return result
  }

  registration(data: PostAuthRegistrationRequestDto): Observable<HttpResponse<{}>> {
    const result = this.http.post<{}>(`${this.api}/registration`, data, {observe: 'response'})
    return result
  }

}
