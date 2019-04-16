import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TankService } from '../../services/tank.service';
import { IAccount } from '../../models/tank-models/account.interface';
import { IAccountDetails } from '../../models/tank-models/account-details.interface';
import { ITank } from '../../models/tank-models/tank.interface';

import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetAccount, GetTanks } from '../../store/actions/tank.actions';
import { selectSelectedAccount, selectTankList } from '../../store/selectors/tank.selector';

@Component({
  selector: 'app-tankopedia',
  templateUrl: './tankopedia.component.html',
  styleUrls: ['./tankopedia.component.scss']
})
export class TankopediaComponent implements OnInit {
  accounts$: Observable<IAccount[]>;
  accDetails: IAccountDetails;
  tanks: ITank[];
  private searchTerms = new Subject<string>();

  constructor(
    private store: Store<IAppState>,
    private http: HttpClient,
    private tankService: TankService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.accounts$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.tankService.getAccounts(term, 20)),

      map(result => result.data)
    );
  }

  downloadAccountDetails(accountId: number): void {
    this.store.dispatch(new GetAccount(accountId));
    this.store.pipe(select(selectSelectedAccount)).subscribe(result => this.accDetails = result);

    this.store.dispatch(new GetTanks(accountId));
    this.store.pipe(select(selectTankList)).subscribe(result => this.tanks = result);
  }

}
