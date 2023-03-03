import { Routes } from '@angular/router';

export const PANDA_ROUTES: Routes = [
   {
      path: '',
      loadComponent: () =>
         import('./panda-list/panda-list.component').then(
            (m) => m.PandaListComponent
         )
   },
   {
      path: ':id',
      loadComponent: () =>
         import('./panda-display/panda-display.component').then(
            (m) => m.PandaDisplayComponent
         )
   },
];
