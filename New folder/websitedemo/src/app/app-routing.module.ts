import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EverythingComponent } from './everything/everything.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { ProfileComponent } from './profile/profile.component';
import { WomenComponent } from './women/women.component';

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
  path:'women',
  component:WomenComponent
},
{
  path:'men',
  component:MenComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
