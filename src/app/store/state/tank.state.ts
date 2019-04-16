import { IAccount } from '../../models/tank-models/account.interface';
import { IAccountDetails } from '../../models/tank-models/account-details.interface';
import { IModuleDetails } from '../../models/tank-models/module-details.interface';
import { ITank } from '../../models/tank-models/tank.interface';
import { ITankDetails } from '../../models/tank-models/tank-details.interface';

export interface ITankState {
    accounts: IAccount[];
    selectedAccount: IAccountDetails;
    tanks: ITank[];
    selectedTank: ITankDetails;
    guns: IModuleDetails[];
    selectedModule: IModuleDetails;
}

export const initialTankState: ITankState = {
    accounts: null,
    selectedAccount: null,
    tanks: null,
    selectedTank: null,
    guns: null,
    selectedModule: null
};
