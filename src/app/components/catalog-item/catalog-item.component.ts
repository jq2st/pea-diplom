import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs';
import { CarCard } from 'src/app/models/models';
import { CatalogApiService } from 'src/app/services/catalog-api.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit, OnDestroy {
  id = ''
  title = ''
  picture = ''
  info = ''
  year = ''
  mass = ''
  country = ''
  class = ''
  shape = ''
  fuel = ''

  private _subscriptions$: Subscription = new Subscription()

  constructor(private activatedRoute: ActivatedRoute, private catalogApi: CatalogApiService) {}

  ngOnInit() {
    const itemSubscription$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.catalogApi.getCar(params['id'])
      })
    ).subscribe((card: CarCard) => {
      this.title = card.brand + ' ' + card.model
      this.picture = card.image
      this.info = card.info
      this.year = card.year
      this.mass = card.mass
      this.country = card.country
      this.class = card.class
      this.shape = card.shape
      this.fuel = card.fuel
    })
    this._subscriptions$.add(itemSubscription$)
    console.log(1)
  }

  ngOnDestroy(): void {
      
  }

}
