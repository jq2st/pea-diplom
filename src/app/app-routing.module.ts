import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { OfferComponent } from './components/offer/offer.component';
import {ServiceComponent} from './components/service/service.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminCatalogComponent } from './components/admin-catalog/admin-catalog.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminPanelLayoutComponent } from './layouts/admin-panel-layout/admin-panel-layout.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegistrationComponent } from './components/auth-registration/auth-registration.component';
import { AccountComponent } from './components/account/account.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { canActivateAdmin, CanActivateAdmin } from './guards/admin.guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'catalog', pathMatch: 'full'},
    {path: 'catalog', component: CatalogComponent},
    {path: 'catalog/:id', component: CatalogItemComponent},
    {path: 'catalog/:id/offer', component: OfferComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'account', component: AccountComponent}
  ]},
  {path: 'auth', component: AuthComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: AuthLoginComponent},
    {path: 'registration', component: AuthRegistrationComponent}
  ]},
  {path: 'admin', component: AdminLayoutComponent, children: [
    {path: '', component: AdminPanelLayoutComponent, canActivate: [canActivateAdmin], children: [
      {path: '', redirectTo: 'catalog', pathMatch: 'full'},
      {path: 'catalog', component: AdminCatalogComponent},
      {path: 'orders', component: AdminOrdersComponent},
      {path: 'users', component: AdminUsersComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
