import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
      path: 'home',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
   },
   {
      path: 'pandas',
      loadComponent: () => import('./panda-list/panda-list.component').then(m => m.PandaListComponent)
   },
   {
      path: 'pandas/:id',
      loadComponent: () => import('./panda-display/panda-display.component').then(m => m.PandaDisplayComponent)
   },
];
