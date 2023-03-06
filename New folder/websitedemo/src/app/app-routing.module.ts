import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './services/accessories/accessories.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EverythingComponent } from './services/everything/everything.component';
import { HomeComponent } from './services/home/home.component';
import { MenComponent } from './services/men/men.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { WomenComponent } from './services/women/women.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'#',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'everything',
  component:EverythingComponent
},
{
  path:'everything',
  children:[{path:'product/:id',component:ProductDetailsComponent}],
},
{
  path:'women',
  component:WomenComponent
},
{
  path:'women',
  children:[{path:'product/:id',component:ProductDetailsComponent}],
},
{
  path:'men',
  component:MenComponent
},
{
  path:'men',
  children:[{path:'product/:id',component:ProductDetailsComponent}]
},
{
  path:'accessories',
  component:AccessoriesComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'contactus',
  component:ContactusComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'home',
  children:[{path:'#', component:HomeComponent}]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
