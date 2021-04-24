import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopbridgeHomeComponent } from './shopbridge-home/shopbridge-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsComponent } from './shopbridge-home/products/products.component';
import { CartComponent } from './shopbridge-home/cart/cart.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    ShopbridgeHomeComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
