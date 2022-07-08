import { NgModule } from '@angular/core';
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./components/test/test.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  { path: 'auth', component: AuthenticationComponent },
  { path: 'test', component: TestComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
