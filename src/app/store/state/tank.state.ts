import { IUser } from '../../models/user.interface';
import { Account } from '../../models/tank-models/account.interface';
import { AccountDetails } from '../../models/tank-models/account-details.interface';
import { QueryResponse } from '../../models/tank-models/query-response.interface';
import { ModuleDetails } from '../../models/tank-models/module-details.interface';
import { Tank } from '../../models/tank-models/tank.interface';
import { TankDetails } from '../../models/tank-models/tank-details.interface';

export interface ITankState {
    accounts: Account[];
    selectedAccount: AccountDetails;
    tanks: Tank[];
    selectedTank: TankDetails;
    guns: ModuleDetails[];
    selectedModule: ModuleDetails;
}

export const initialTankState: ITankState = {
    accounts: null,
    selectedAccount: null,
    tanks: null,
    selectedTank: null,
    guns: null,
    selectedModule: null
};
