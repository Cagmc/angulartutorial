import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TankService } from '../../services/tank.service';
import { GunDetails } from '../../models/tank-models/gun-details.interface';
import { GetModuleDetails } from 'src/app/models/tank-models/get-module-details.interface';

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

    this.tankService.getModuleDetails(new GetModuleDetails(this.id, 'vehicleGun')).subscribe(x => this.gunDetails = x);
  }

}
