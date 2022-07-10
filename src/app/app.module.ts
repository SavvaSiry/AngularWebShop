import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from "primeng/paginator";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TestComponent} from './components/test/test.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    TestComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    PaginatorModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
