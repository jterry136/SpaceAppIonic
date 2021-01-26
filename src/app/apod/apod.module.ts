import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APODPageRoutingModule } from './apod-routing.module';

import { APODPage } from './apod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APODPageRoutingModule
  ],
  declarations: [APODPage]
})
export class APODPageModule {}
