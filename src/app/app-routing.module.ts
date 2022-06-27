import { NgModule } from '@angular/core';
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'auth', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
