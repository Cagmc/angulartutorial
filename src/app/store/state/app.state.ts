import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';
import { ITankState, initialTankState } from './tank.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
    tanks: ITankState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState,
    tanks: initialTankState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
