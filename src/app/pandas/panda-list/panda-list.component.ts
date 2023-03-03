import { Component, OnInit } from '@angular/core';
import { PandaService } from '../../services/panda.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Panda } from '../interfaces/panda';

@Component({
   templateUrl: './panda-list.component.html',
   styleUrls: ['./panda-list.component.scss'],
   standalone: true,
   imports: [CommonModule, FormsModule, RouterModule],
})
export class PandaListComponent implements OnInit {
   public filterTerm: string = '';
   public pandas: Panda[];
   public filteredPandas!: Panda[];
   constructor(pandaService: PandaService, private route: ActivatedRoute) {
      this.pandas = pandaService.getPandas();
      this.filteredPandas = this.pandas;
   }

   ngOnInit(): void {
      // this.filterTerm = this.route.snapshot.queryParamMap.get('filterTerm') ?? '';
      this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
         this.filterTerm = paramMap.get('filterTerm') ?? '';
         this.onFilterTermChange(this.filterTerm);
      });
   }

   onFilterTermChange(filterTerm: string): void {
      this.filterTerm = filterTerm;
      if (filterTerm) {
         this.filteredPandas = this.pandas.filter((panda) =>
            panda.name.toLowerCase().includes(filterTerm.toLowerCase())
         );
      } else {
         this.filteredPandas = this.pandas;
      }
   }
}
