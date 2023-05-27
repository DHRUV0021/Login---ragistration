import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RagisterComponent } from './ragister/ragister.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'ragister',
    component:RagisterComponent
  },
  {
    path:'dasboard',
    component:DasboardComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'slider',
    component:SliderComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'stock',
    component:StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
