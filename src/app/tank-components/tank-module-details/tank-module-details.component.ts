import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectSelectedModule } from '../../store/selectors/tank.selector';

import { TankService } from '../../services/tank.service';
import { ModuleDetails } from '../../models/tank-models/module-details.interface';
import { GetModule } from 'src/app/store/actions/tank.actions';
import { GetModuleDetails } from '../../models/tank-models/get-module-details.interface';

@Component({
  selector: 'app-tank-module-details',
  templateUrl: './tank-module-details.component.html',
  styleUrls: ['./tank-module-details.component.scss']
})
export class TankModuleDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() type: string;
  @Output() selected = new EventEmitter<ModuleDetails>();
  moduleDetails: ModuleDetails;
  isPage: boolean;

  constructor(
    private store: Store<IAppState>,
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

    this.store.dispatch(new GetModule(new GetModuleDetails(this.id, this.type)));
    this.store.pipe(select(selectSelectedModule)).subscribe(result => this.moduleDetails = result);
  }

  select(): void {
    this.selected.emit(this.moduleDetails);
  }

}
