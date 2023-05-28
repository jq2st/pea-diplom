import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CardComponent } from './components/card/card.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OfferComponent } from './components/offer/offer.component';
import { ServiceComponent } from './components/service/service.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminCatalogComponent } from './components/admin-catalog/admin-catalog.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelLayoutComponent } from './layouts/admin-panel-layout/admin-panel-layout.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegistrationComponent } from './components/auth-registration/auth-registration.component';
import { AccountComponent } from './components/account/account.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminPanelLayoutComponent,
    MainLayoutComponent,
    AppComponent,
    AuthComponent,
    AuthLoginComponent,
    AuthRegistrationComponent,
    HeaderComponent,
    CatalogComponent,
    CardComponent,
    ContactsComponent,
    CatalogItemComponent,
    OfferComponent,
    AccountComponent,
    ServiceComponent,
    AdminHeaderComponent,
    AdminCatalogComponent,
    AdminOrdersComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
