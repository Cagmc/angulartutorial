import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TankService, ModuleDetails } from '../tank.service';

@Component({
  selector: 'app-tank-module-details',
  templateUrl: './tank-module-details.component.html',
  styleUrls: ['./tank-module-details.component.scss']
})
export class TankModuleDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() type: string;
  moduleDetails: ModuleDetails;
  isPage: boolean;

  constructor(
    private route: ActivatedRoute,
    private tankService: TankService) { }

  ngOnInit() {
    this.downloadModuleDetails();
  }

  downloadModuleDetails(): void {
    if (this.id === undefined) {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.type = this.route.snapshot.paramMap.get('type');
      this.isPage = true;
    }
    this.tankService.getModuleDetails(this.id, this.type).subscribe(x => this.moduleDetails = x.data[this.id]);
  }

}
