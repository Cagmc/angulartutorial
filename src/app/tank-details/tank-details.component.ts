import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TankService } from '../tank.service';

@Component({
  selector: 'app-tank-details',
  templateUrl: './tank-details.component.html',
  styleUrls: ['./tank-details.component.scss']
})
export class TankDetailsComponent implements OnInit {
  tankDetails: any;
  id: number;
  selectedModules: Array<SelectedModule>[];

  constructor(
    private route: ActivatedRoute,
    private tankService: TankService) { }

  ngOnInit() {
    this.downloadTankDetails();
  }

  downloadTankDetails() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.tankService.getTankDetails(this.id).subscribe(x => this.tankDetails = x.data[this.id]);
  }

  selectModule(id: number, type: string): void {
    alert(id);
  }

}

class SelectedModule {
  constructor(id: number, type: string) {
    this.id = id;
    this.type = type;
  }
  type: string;
  id: number;
}
