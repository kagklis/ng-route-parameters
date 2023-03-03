import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Panda } from '../interfaces/panda';
import { PandaService } from '../../services/panda.service';

import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
   templateUrl: './panda-display.component.html',
   styleUrls: ['./panda-display.component.scss'],
   standalone: true,
   imports: [CommonModule, RouterModule],
})
export class PandaDisplayComponent implements OnInit {
   panda?: Panda;
   constructor(
      private router: Router,
      private route: ActivatedRoute,
      private pandaService: PandaService
   ) {}

   ngOnInit(): void {
      // const param = this.route.snapshot.paramMap.get('id');
      // if (param) {
      //    const id = +param;
      //    this.panda = this.pandaService.getPandaById(id);
      // }

      this.route.paramMap
         .pipe(
            map((paramMap: ParamMap) => +(paramMap?.get('id') ?? -1)),
            map((id: number) => this.pandaService.getPandaById(id))
         )
         .subscribe((panda: Panda | undefined) => (this.panda = panda));
   }

   navigateBack(): void {
      this.router.navigate(['/pandas']);
   }
}
