import { Injectable } from '@angular/core';

const tokenStorageKey = 'auth-token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = ''

  constructor() { }

  getToken(): string {
    if (this._token) return this._token
    const token = localStorage.getItem(tokenStorageKey)
    if (token) {
      this._token = token
      return token
    }
    return ''
  }

  updateToken(token: string) {
    localStorage.setItem(tokenStorageKey, token)
  }

  logout() {
    localStorage.removeItem(tokenStorageKey)
  }

}
