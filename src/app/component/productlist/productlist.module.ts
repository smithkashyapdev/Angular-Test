import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductlistPageRoutingModule } from './productlist-routing.module';

import { ProductlistPage } from './productlist.page';
import { ComponentsModule } from '../preload-image/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductlistPageRoutingModule
  ],
  declarations: [ProductlistPage]
  ,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductlistPageModule {}
