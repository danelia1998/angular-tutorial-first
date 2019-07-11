import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishListComponent } from './wish-list/wish-list.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishListComponent,
    UserRegisterComponent,
    UsersListComponent,
    UserEditComponent,
    ConfirmationDialogComponent,
    CurrencyComponent,
    CurrencyConverterComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent,
    AdminComponent,
    GuardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: { name: 'Home' }, component: ProductListComponent },
      { path: 'products/:productId', data: { name: 'Product' }, component: ProductDetailsComponent },
      { path: 'cart', data: { name: 'Cart' }, component: CartComponent },
      { path: 'shipping', data: { name: 'Shipping' }, component: ShippingComponent },
      { path: 'register', data: { name: 'Register' }, component: UserRegisterComponent },
      { path: 'users', data: { name: 'Users' }, component: UsersListComponent },
      { path: 'users/edit/:userId', data: { name: 'UsersEach' }, component: UserEditComponent },
      { path: 'currency', data: { name: 'Currency' }, component: CurrencyComponent },
      { path: 'currency-converter', data: { name: 'Converter' }, component: CurrencyConverterComponent },
      { path : 'dashboard', data: { name: 'Dashboard' }, component: DashboardComponent},
      { path : 'dashboard/news', data: { name: 'News' }, component: NewsComponent},
      { path : 'dashboard/news/:articleId', data: { name: 'Article' }, component: ArticleComponent},
      { path : 'error', data: { name: 'Error' }, component: ErrorPageComponent},
      { path : 'admin', data: { name: 'Admin' }, canActivate: [AuthGuard], component: AdminComponent},
      { path : 'guard', data: { name: 'Guard' }, component: GuardComponent},


    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
