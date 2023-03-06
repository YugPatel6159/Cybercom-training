import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EverythingComponent } from './services/everything/everything.component';
import { WomenComponent } from './services/women/women.component';
import { MenComponent } from './services/men/men.component';
import { AccessoriesComponent } from './services/accessories/accessories.component';
import { HomeComponent } from './services/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EverythingComponent,
    WomenComponent,
    MenComponent,
    AccessoriesComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    CartComponent,
    ProfileComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
