import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panda } from '../interfaces/panda';
import { PandaService } from '../services/panda.service';

@Component({
   templateUrl: './panda-display.component.html',
   styleUrls: ['./panda-display.component.scss'],
})
export class PandaDisplayComponent implements OnInit {
   panda?: Panda;
   constructor(
      private router: Router,
      private route: ActivatedRoute,
      private pandaService: PandaService
   ) {}

   ngOnInit(): void {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
         const id = +param;
         this.panda = this.pandaService.getPandaById(id);
      }
   }

   navigateBack(): void {
      this.router.navigate(['/pandas']);
   }
}
