import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarCard } from 'src/app/models/models';
import { CatalogApiService } from 'src/app/services/catalog-api.service';
import { GetCatalogResponseDto } from 'src/app/services/dto/get-catalog-response.dto';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  
  isLoading: boolean = false
  cards: CarCard[] = []
  brandFilter: string = ''
  modelFilter: string = ''

  private _subscriptions: Subscription = new Subscription()

  constructor(private catalogApi: CatalogApiService) {}

  ngOnInit(): void {
    this.loadCatalog()
  }

  loadCatalog() {
    this.isLoading = true
    const brand = this.brandFilter
    const model = this.modelFilter
    const catalogSubscription$ = this.catalogApi.getCars(brand, model).subscribe((cards: GetCatalogResponseDto) => {
      this.cards = cards.catalog
      this.isLoading = false
    })

    this._subscriptions.add(catalogSubscription$)
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe()
  }
}
