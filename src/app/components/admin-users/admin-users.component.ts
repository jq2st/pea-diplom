import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminUser } from 'src/app/models/models';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {

  list: AdminUser[] = []

  private _subscriptions: Subscription = new Subscription()

  constructor(private usersApi: UsersApiService) {}

  ngOnInit(): void {
    const listSubscription$ = this.usersApi.getUsers().subscribe(result => {
      this.list = result.users
    })
    this._subscriptions.add(listSubscription$)
  }

  ngOnDestroy(): void {
      this._subscriptions.unsubscribe()
  }
}
