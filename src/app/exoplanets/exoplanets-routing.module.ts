import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoplanetsPage } from './exoplanets.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoplanetsPageRoutingModule {}
