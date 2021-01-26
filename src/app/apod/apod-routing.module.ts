import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APODPage } from './apod.page';

const routes: Routes = [
  {
    path: '',
    component: APODPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APODPageRoutingModule {}
