import { NgModule } from '@angular/core';
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'heroes', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
