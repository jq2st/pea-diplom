import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Subscription } from 'rxjs';
import { CarCard } from 'src/app/models/models';
import { CatalogApiService } from 'src/app/services/catalog-api.service';

@Component({
  selector: 'app-admin-catalog',
  templateUrl: './admin-catalog.component.html',
  styleUrls: ['./admin-catalog.component.scss']
})
export class AdminCatalogComponent implements OnInit, OnDestroy {

  list: CarCard[] = []
  showForm: boolean = false
  form: FormGroup

  private _subscriptions: Subscription = new Subscription()

  constructor(private catalogApi: CatalogApiService) {
    this.form = new FormGroup({
      brand: new FormControl('', {validators: [Validators.required]}),
      model: new FormControl('', {validators: [Validators.required]}),
      info: new FormControl('', {validators: [Validators.required]}),
      year: new FormControl('', {validators: [Validators.required]}),
      mass: new FormControl('', {validators: [Validators.required]}),
      country: new FormControl('', {validators: [Validators.required]}),
      class: new FormControl('', {validators: [Validators.required]}),
      shape: new FormControl('', {validators: [Validators.required]}),
      fuel: new FormControl('', {validators: [Validators.required]}),
      image: new FormControl('', {validators: [Validators.required]}),
      price: new FormControl('', {validators: [Validators.required]})
    })
  }

  ngOnInit(): void {
   this.getList()
  }

  getList() {
    const listSubscription$ = this.catalogApi.getCars().subscribe(result => {
      this.list = result.catalog
    })
    this._subscriptions.add(listSubscription$)
  }

  onAddSubmit() {
    this.form.disable()
    const value = this.form.value
    const addSubscription$ = this.catalogApi.addCar(value).subscribe(result => {
      this.form.reset()
      this.form.enable()
      this.getList()
    })
    this._subscriptions.add(addSubscription$)
  }

  remove(id: number) {
    const removeSubscription$ = this.catalogApi.removeCar(id).subscribe(result => {
      this.getList()
    })
    this._subscriptions.add(removeSubscription$)
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe()
  }

}
