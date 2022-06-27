import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from "primeng/paginator";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
    imports: [
        BrowserModule,
        InputTextModule,
        PaginatorModule,
        AppRoutingModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
