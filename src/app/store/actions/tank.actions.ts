import { Action } from '@ngrx/store';

import { QueryResponse } from '../../models/tank-models/query-response.interface';
import { AccountDetails } from '../../models/tank-models/account-details.interface';
import { Account } from '../../models/tank-models/account.interface';
import { GetModuleDetails } from '../../models/tank-models/get-module-details.interface';
import { ModuleDetails } from 'src/app/models/tank-models/module-details.interface';
import { Tank } from '../../models/tank-models/tank.interface';
import { TankDetails } from '../../models/tank-models/tank-details.interface';

export enum ETankActions {
    GetAccounts = '[Tank] Get Accounts',
    GetAccountsSuccess = '[Tank] Get Accounts Success',
    GetAccount = '[Tank] Get Account',
    GetAccountSuccess = '[Tank] Get Account Success',
    GetTanks = '[Tank] Get Tanks',
    GetTanksSuccess = '[Tank] Get Tanks Success',
    GetTank = '[Tank] Get Tank',
    GetTankSuccess = '[Tank] Get Tank Success',
    GetGuns = '[Tank] Get Guns',
    GetGunsSuccess = '[Tank] Get Guns Success',
}

export class GetAccounts implements Action {
    public readonly type = ETankActions.GetAccounts;
    constructor(public payload: string) { }
}

export class GetAccountsSuccess implements Action {
    public readonly type = ETankActions.GetAccountsSuccess;
    constructor(public payload: Account[]) { }
}

export class GetAccount implements Action {
    public readonly type = ETankActions.GetAccount;
    constructor(public payload: number) { }
}

export class GetAccountSuccess implements Action {
    public readonly type = ETankActions.GetAccountSuccess;
    constructor(public payload: AccountDetails) { }
}

export class GetTanks implements Action {
    public readonly type = ETankActions.GetTanks;
    constructor(public payload: number) { }
}

export class GetTanksSuccess implements Action {
    public readonly type = ETankActions.GetTanksSuccess;
    constructor(public payload: Tank[]) { }
}

export class GetTank implements Action {
    public readonly type = ETankActions.GetTank;
    constructor(public payload: number) { }
}

export class GetTankSuccess implements Action {
    public readonly type = ETankActions.GetTankSuccess;
    constructor(public payload: TankDetails) { }
}

export class GetGuns implements Action {
    public readonly type = ETankActions.GetGuns;
    constructor(public payload: GetModuleDetails) { }
}

export class GetGunsSuccess implements Action {
    public readonly type = ETankActions.GetGunsSuccess;
    constructor(public payload: ModuleDetails[]) { }
}

export type TankActions =
    GetAccounts | GetAccountsSuccess |
    GetAccount | GetAccountSuccess |
    GetTanks | GetTanksSuccess |
    GetTank | GetTankSuccess |
    GetGuns | GetGunsSuccess;
