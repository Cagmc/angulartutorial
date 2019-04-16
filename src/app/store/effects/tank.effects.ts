import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import {
    ETankActions,
    GetAccount,
    GetAccountSuccess,
    GetAccounts,
    GetAccountsSuccess,
    GetTank,
    GetTankSuccess,
    GetTanks,
    GetTanksSuccess,
    GetModule,
    GetModuleSuccess
} from '../actions/tank.actions';
import { TankService } from '../../services/tank.service';
import { IQueryResponse } from '../../models/tank-models/query-response.interface';
import { IAccountDetails } from '../../models/tank-models/account-details.interface';
import { IAccount } from '../../models/tank-models/account.interface';
import { ITank } from '../../models/tank-models/tank.interface';

import { ITankDetails } from 'src/app/models/tank-models/tank-details.interface';
import { IModuleDetails } from 'src/app/models/tank-models/module-details.interface';

@Injectable()
export class TankEffects {
    @Effect()
    getAccounts$ = this.actions$.pipe(
        ofType<GetAccounts>(ETankActions.GetAccounts),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getAccounts(filter, 10)),
        switchMap((accounts: IQueryResponse<IAccount[]>) => of(new GetAccountsSuccess(accounts.data)))
    );

    @Effect()
    getAccount$ = this.actions$.pipe(
        ofType<GetAccount>(ETankActions.GetAccount),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getAccountDetails(filter)),
        switchMap((account: IAccountDetails) => of(new GetAccountSuccess(account)))
    );

    @Effect()
    getTanks$ = this.actions$.pipe(
        ofType<GetTanks>(ETankActions.GetTanks),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getTanks(filter)),
        switchMap((tanks: ITank[]) => of(new GetTanksSuccess(tanks)))
    );

    @Effect()
    getTank$ = this.actions$.pipe(
        ofType<GetTank>(ETankActions.GetTank),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getTankDetails(filter)),
        switchMap((tank: ITankDetails) => of(new GetTankSuccess(tank)))
    );

    @Effect()
    getModuleDetails$ = this.actions$.pipe(
        ofType<GetModule>(ETankActions.GetModule),
        map(action => action.payload),
        switchMap((filter) => this.tankService.getModuleDetails(filter)),
        switchMap((module: IModuleDetails) => of(new GetModuleSuccess(module)))
    );

    constructor(
        private tankService: TankService,
        private actions$: Actions,
        // private _store: Store<IAppState>
    ) { }
}
