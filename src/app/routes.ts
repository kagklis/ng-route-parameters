import { Routes } from '@angular/router';
import { PandaService } from './services/panda.service';

export const APP_ROUTES: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
      path: 'home',
      loadComponent: () =>
         import('./home/home.component').then((m) => m.HomeComponent)
   },
   {
      path: 'pandas',
      providers: [PandaService],
      loadChildren: () => import('./pandas').then((m) => m.PANDA_ROUTES)
   },
];
