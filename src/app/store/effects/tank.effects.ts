import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    ETankActions,
    GetAccount,
    GetAccountSuccess,
    GetAccounts,
    GetAccountsSuccess,
    GetGuns,
    GetGunsSuccess,
    GetTank,
    GetTankSuccess,
    GetTanks,
    GetTanksSuccess
} from '../actions/tank.actions';
import { TankService } from '../../services/tank.service';
import { IUserHttp } from '../../models/http-models/user-http.interface';
import { QueryResponse } from '../../models/tank-models/query-response.interface';
import { AccountDetails } from '../../models/tank-models/account-details.interface';
import { Account } from '../../models/tank-models/account.interface';
import {
    selectSelectedTank,
    selectAccountList,
    selectGunList,
    selectSelectedAccount,
} from '../selectors/tank.selector';

@Injectable()
export class TankEffects {
    @Effect()
    /*getAccounts$ = this._actions$.pipe(
        ofType<GetAccounts>(ETankActions.GetAccounts),
        map(action => action.payload),
        switchMap((filter) => this._tankService.getAccounts(filter, 10)),
        switchMap((accounts: QueryResponse<Account[]>) => of(new GetAccountsSuccess(accounts.data)))
    );*/

    getAccount$ = this.actions$.pipe(
        ofType<GetAccount>(ETankActions.GetAccount),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getAccountDetails(filter)),
        switchMap((account: AccountDetails) => of(new GetAccountSuccess(account)))
    );

    constructor(
        private tankService: TankService,
        private actions$: Actions,
        // private _store: Store<IAppState>
    ) { }
}
