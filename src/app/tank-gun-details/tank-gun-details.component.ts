import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TankService, GunDetails } from '../tank.service';

@Component({
  selector: 'app-tank-gun-details',
  templateUrl: './tank-gun-details.component.html',
  styleUrls: ['./tank-gun-details.component.scss']
})
export class TankGunDetailsComponent implements OnInit {
  @Input() id: number;
  gunDetails: GunDetails;
  isPage: boolean;

  constructor(
    private route: ActivatedRoute,
    private tankService: TankService) { }

    ngOnInit() {
      this.downloadGunDetails();
    }

    downloadGunDetails(): void {
      if (this.id === undefined) {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.isPage = true;
      }
      this.tankService.getModuleDetails(this.id, 'vehicleGun').subscribe(x => this.gunDetails = x.data[this.id]);
    }

}
