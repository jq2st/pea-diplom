import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/models';
import { CatalogApiService } from 'src/app/services/catalog-api.service';
import { OrdersApiService } from 'src/app/services/orders-api.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {

  list: Order[] = []

  private _subscriptions: Subscription = new Subscription()

  constructor(private ordersApi: OrdersApiService) {}

  ngOnInit(): void {
    const listSubscription$ = this.ordersApi.getOrders().subscribe(result => {
      this.list = result.orders
    })
    this._subscriptions.add(listSubscription$)
  }

  ngOnDestroy(): void {
      this._subscriptions.unsubscribe()
  }
}
