import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PandaDisplayComponent } from './panda-display/panda-display.component';
import { PandaListComponent } from './panda-list/panda-list.component';

const routes: Routes = [
   {
      path: '',
      component: PandaListComponent,
   },
   {
      path: ':id',
      component: PandaDisplayComponent,
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PandaRoutingModule {}
