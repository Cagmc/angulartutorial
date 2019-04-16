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
    GetTanksSuccess,
    GetModule,
    GetModuleSuccess
} from '../actions/tank.actions';
import { TankService } from '../../services/tank.service';
import { QueryResponse } from '../../models/tank-models/query-response.interface';
import { AccountDetails } from '../../models/tank-models/account-details.interface';
import { Account } from '../../models/tank-models/account.interface';
import { Tank } from '../../models/tank-models/tank.interface';
import {
    selectSelectedTank,
    selectAccountList,
    selectGunList,
    selectSelectedAccount,
} from '../selectors/tank.selector';
import { TankDetails } from 'src/app/models/tank-models/tank-details.interface';
import { ModuleDetails } from 'src/app/models/tank-models/module-details.interface';

@Injectable()
export class TankEffects {
    @Effect()
    getAccounts$ = this.actions$.pipe(
        ofType<GetAccounts>(ETankActions.GetAccounts),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getAccounts(filter, 10)),
        switchMap((accounts: QueryResponse<Account[]>) => of(new GetAccountsSuccess(accounts.data)))
    );

    @Effect()
    getAccount$ = this.actions$.pipe(
        ofType<GetAccount>(ETankActions.GetAccount),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getAccountDetails(filter)),
        switchMap((account: AccountDetails) => of(new GetAccountSuccess(account)))
    );

    @Effect()
    getTanks$ = this.actions$.pipe(
        ofType<GetTanks>(ETankActions.GetTanks),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getTanks(filter)),
        switchMap((tanks: Tank[]) => of(new GetTanksSuccess(tanks)))
    );

    @Effect()
    getTank$ = this.actions$.pipe(
        ofType<GetTank>(ETankActions.GetTank),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getTankDetails(filter)),
        switchMap((tank: TankDetails) => of(new GetTankSuccess(tank)))
    );

    @Effect()
    getModuleDetails$ = this.actions$.pipe(
        ofType<GetModule>(ETankActions.GetModule),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getModuleDetails(filter)),
        switchMap((module: ModuleDetails) => of(new GetModuleSuccess(module)))
    );

    constructor(
        private tankService: TankService,
        private actions$: Actions,
        // private _store: Store<IAppState>
    ) { }
}
