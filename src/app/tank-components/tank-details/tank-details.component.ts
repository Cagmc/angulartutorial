import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';

import { GetTank } from '../../store/actions/tank.actions';
import { selectSelectedTank } from '../../store/selectors/tank.selector';
import { TankService } from '../../services/tank.service';
import { IModuleDetails } from '../../models/tank-models/module-details.interface';
import { ITankDetails } from '../../models/tank-models/tank-details.interface';

@Component({
  selector: 'app-tank-details',
  templateUrl: './tank-details.component.html',
  styleUrls: ['./tank-details.component.scss']
})
export class TankDetailsComponent implements OnInit {
  tankDetails: ITankDetails = null;
  id: number;
  selectedModules: Array<IModuleDetails> = new Array<IModuleDetails>();
  totalPrice: number;

  displaySection: Array<boolean> = new Array<boolean>();

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private tankService: TankService) { }

  ngOnInit() {
    this.downloadTankDetails();
  }

  downloadTankDetails() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new GetTank(this.id));
    this.store.pipe(select(selectSelectedTank))
      .subscribe((result) => {
        this.tankDetails = result;
        if (this.tankDetails !== null) { this.totalPrice = this.tankDetails.price_credit; }
      });
  }

  onSelected(selectedModule: IModuleDetails) {
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
