import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    RegisterFormComponent,
    UsersListComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent,
    AdminComponent,
    GuardComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    MenuComponent,
    LoaderComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', data: {name: 'Home'}, component: ProductListComponent},
      { path: 'products/:productId', data: {name: 'Product'}, component: ProductDetailsComponent},
      { path: 'cart', data: {name: 'Cart'}, component: CartComponent},
      { path: 'shipping', data: {name: 'Shipping'}, component: ShippingComponent},
      { path: 'wishlist', data: {name: 'Wishlist'}, component: WishlistComponent},
      { path: 'register-form', data: {name: 'Register'}, component: RegisterFormComponent },
      { path: 'users-list', data: {name: 'Users'}, component: UsersListComponent, canActivate: [AuthGuard] },
      { path: 'currency', data: {name: 'Currency'}, component: CurrencyComponent},
      { path: 'exchange', data: {name: 'Exchange'}, component: ExchangeComponent},
      { path: 'dashboard', data: {name: 'Dashboard'}, component: DashboardComponent},
      { path: 'dashboard/news', data: {name: 'News'}, component: NewsComponent},
      { path: 'dashboard/news/:articleId', data: {name: 'Article'}, component: ArticleComponent},
      { path: 'error', data: {name: 'Error'}, component: ErrorComponent},
      { path: 'guard', data: {name: 'Guard'}, component: GuardComponent},
      { path: 'login', data: {name: 'Login'}, component: LoginComponent},
      { path: 'employees', data: {name: 'Employees'}, component: EmployeesComponent},
      { path: 'employee/register', data: {name: 'employeeRegister'}, component: EmployeeRegisterComponent},
      { path: 'admin', data: {name: 'Admin'}, component: AdminComponent, canActivate: [AuthGuard]},
      {path: 'employee/:employeeId', data: { name: 'employee' }, component: EmployeeComponent},
      { path: '**', redirectTo: 'error'}
    ])
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
