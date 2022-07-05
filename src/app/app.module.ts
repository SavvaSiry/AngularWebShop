import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from "primeng/paginator";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    TestComponent
  ],
    imports: [
        BrowserModule,
        InputTextModule,
        PaginatorModule,
        AppRoutingModule,
        ButtonModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
