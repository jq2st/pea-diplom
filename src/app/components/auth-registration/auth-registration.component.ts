import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostLoginRequestDto } from 'src/app/services/dto/post-login-request.dto';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators'
import { Subscription, throwError } from 'rxjs'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { PostAuthRegistrationRequestDto } from 'src/app/services/dto/post-auth-registration-request.dto';

@Component({
  selector: 'app-auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.scss']
})
export class AuthRegistrationComponent {

  form: FormGroup
  isDisabled: boolean = false
  isError: boolean = false

  private _subscription$ = new Subscription()

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  register(): void {
    this.isDisabled = true
    const body: PostAuthRegistrationRequestDto = {
      ...this.form.value
    }
    const loginSubscription$ = this.authApiService.registration(body).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    ).subscribe({
      error: (error: HttpErrorResponse) => {
        this.isDisabled = false
        this.isError = true
      },
      next: (response: HttpResponse<{}>) => {
        this.isDisabled = false
        this.form.reset()
        console.error(response)
        if (!response.body) return;
        this.router.navigate([''])
      }
    })
    this._subscription$.add(loginSubscription$)
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe()
  }
}
