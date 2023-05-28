import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { switchMap } from 'rxjs';
import { CarCard, Order } from 'src/app/models/models';
import { CatalogApiService } from 'src/app/services/catalog-api.service';
import { GetUserResponseDto } from 'src/app/services/dto/get-user-response.dto';
import { PostOrdersRequestDto } from 'src/app/services/dto/post-orders-request.dto';
import { OrdersApiService } from 'src/app/services/orders-api.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy {

  id = ''
  title = ''
  form: FormGroup

  private _subscriptions$: Subscription = new Subscription()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private userService: UsersService,
    private catalogApi: CatalogApiService, 
    private ordersApi: OrdersApiService
  ) {
    this.form = new FormGroup({
      fio: new FormControl('', {validators: [Validators.required]}),
      description: new FormControl(''),
      phone: new FormControl('', {validators: [Validators.required]})
    })
  }

  ngOnInit() {
     const carSubscription$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        console.log(params)
        return this.catalogApi.getCar(params['id'])
      })
    ).subscribe((card: CarCard) => {
      this.title = card.brand + ' ' + card.model
    })
    const userSubscription$ = this.userService.getUser().subscribe({
      error: (error) => console.error('error', error),
      next: (user: GetUserResponseDto) => {
        this.form.setControl('fio', new FormControl(user.name, {validators: [Validators.required]}))
        this.form.setControl('phone', new FormControl(user.phone, {validators: [Validators.required]}))
      }
    })
    this._subscriptions$.add(carSubscription$)
    this._subscriptions$.add(userSubscription$)
  }

  onSubmit() {
    this.form.disable()
    const order: PostOrdersRequestDto = {
      ...this.form.value,
      name: this.title
    }
    this.ordersApi.addOrder(order).subscribe(result => {
      this.form.enable()
      this.form.reset()
      this.router.navigate([''])
    })
  }

  ngOnDestroy(): void {
      
  }

}

