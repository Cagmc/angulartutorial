import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TankService } from '../../services/tank.service';
import { ModuleDetails } from '../../models/tank-models/module-details.interface';
import { QueryResponse } from '../../models/tank-models/query-response.interface';
import { TankDetails } from '../../models/tank-models/tank-details.interface';

@Component({
  selector: 'app-tank-details',
  templateUrl: './tank-details.component.html',
  styleUrls: ['./tank-details.component.scss']
})
export class TankDetailsComponent implements OnInit {
  tankDetails: TankDetails;
  id: number;
  selectedModules: Array<ModuleDetails> = new Array<ModuleDetails>();
  totalPrice: number;

  displaySection: Array<boolean> = new Array<boolean>();

  constructor(
    private route: ActivatedRoute,
    private tankService: TankService) { }

  ngOnInit() {
    this.downloadTankDetails();
  }

  downloadTankDetails() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.tankService.getTankDetails(this.id).subscribe(x => this.onDownloaded(x));
  }

  onDownloaded(response: QueryResponse<any>) {
    this.tankDetails = response.data[this.id];
    this.totalPrice = this.tankDetails.price_credit;
  }

  onSelected(selectedModule: ModuleDetails) {
    const sm = this.selectedModules.find(x => x.type === selectedModule.type);

    if (sm === undefined) {
      this.selectedModules.push(selectedModule);
    } else {
      const index = this.selectedModules.indexOf(sm);
      this.selectedModules[index] = selectedModule;
    }

    this.totalPrice = this.tankDetails.price_credit;
    this.selectedModules.forEach(module => {
      this.totalPrice += module.price_credit;
    });
  }

  toogleSection(index: number): void {
    this.displaySection[index] = !this.displaySection[index];
  }
}
