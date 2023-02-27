import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PandaRoutingModule } from './panda-routing.module';
import { PandaListComponent } from './panda-list/panda-list.component';
import { PandaDisplayComponent } from './panda-display/panda-display.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PandaListComponent,
    PandaDisplayComponent
  ],
  imports: [
    CommonModule,
    PandaRoutingModule,
    FormsModule
  ]
})
export class PandaModule { }
