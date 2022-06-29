import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panda } from '../interfaces/panda';
import { PandaService } from '../services/panda.service';

@Component({
   templateUrl: './panda-list.component.html',
   styleUrls: ['./panda-list.component.scss'],
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
      this.filterTerm =
         this.route.snapshot.queryParamMap.get('filterTerm') ?? '';
      this.onFilterTermChange(this.filterTerm);
   }

   onFilterTermChange(filterTerm: string): void {
      console.log(this.filterTerm);
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
