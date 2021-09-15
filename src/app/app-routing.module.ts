import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPage } from './component/cart/cart.page';
const routes: Routes = [
  
  
  {
    path: 'menu',
    loadChildren: () => import('./component/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
  {
    path: 'cart-status',
    loadChildren: () => import('./component/cart-status/cart-status.module').then( m => m.CartStatusPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./component/login/login.module').then( m => m.LoginPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
