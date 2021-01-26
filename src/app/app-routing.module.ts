import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apod',
    loadChildren: () => import('./apod/apod.module').then( m => m.APODPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'exoplanets',
    loadChildren: () => import('./exoplanets/exoplanets.module').then( m => m.ExoplanetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
