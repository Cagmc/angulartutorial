import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITankState } from '../state/tank.state';

const selectTanks = (state: IAppState) => state.tanks;

export const selectAccountList = createSelector(
    selectTanks,
    (state: ITankState) => state.accounts
);

export const selectSelectedAccount = createSelector(
    selectTanks,
    (state: ITankState) => state.selectedAccount
);

export const selectTankList = createSelector(
    selectTanks,
    (state: ITankState) => state.tanks
);

export const selectSelectedTank = createSelector(
    selectTanks,
    (state: ITankState) => state.selectedTank
);

export const selectGunList = createSelector(
    selectTanks,
    (state: ITankState) => state.guns
);

export const selectSelectedModule = createSelector(
    selectTanks,
    (state: ITankState) => state.selectedModule
);
