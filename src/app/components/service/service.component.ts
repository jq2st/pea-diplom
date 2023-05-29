import { Component } from '@angular/core';
import { DownloadApiService } from 'src/app/services/download-api.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  private _subscriptions$: Subscription = new Subscription()

  constructor(private downloadApi: DownloadApiService) {}

  downloadConditions() {
    const downloadSubscription$ = this.downloadApi.downloadConditions().subscribe()
    this._subscriptions$.add(downloadSubscription$)
  }

  ngOnDestroy() {
    this._subscriptions$.unsubscribe()
  }

}
