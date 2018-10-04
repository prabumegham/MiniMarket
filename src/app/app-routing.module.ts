import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { CartComponent } from './pages/cart/cart.component'

const routes: Routes = [
  {path:'shopping',component: ShoppingComponent},
  {path:'cart',component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =[ ShoppingComponent, CartComponent];
