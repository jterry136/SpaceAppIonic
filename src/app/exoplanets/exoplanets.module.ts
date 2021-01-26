import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoplanetsPageRoutingModule } from './exoplanets-routing.module';

import { ExoplanetsPage } from './exoplanets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoplanetsPageRoutingModule
  ],
  declarations: [ExoplanetsPage]
})
export class ExoplanetsPageModule {}
