import { ETankActions } from './../actions/tank.actions';
import { TankActions } from '../actions/tank.actions';
import { initialTankState, ITankState } from '../state/tank.state';

export const tankReducers = (
    state = initialTankState,
    action: TankActions
): ITankState => {
    switch (action.type) {
        case ETankActions.GetAccountsSuccess: {
            return {
                ...state,
                accounts: action.payload
            };
        }
        case ETankActions.GetAccountSuccess: {
            alert(action.payload);
            console.info(action.payload);
            return {
                ...state,
                selectedAccount: action.payload
            };
        }
        case ETankActions.GetTanksSuccess: {
            return {
                ...state,
                tanks: action.payload
            };
        }
        case ETankActions.GetTankSuccess: {
            return {
                ...state,
                selectedTank: action.payload
            };
        }
        case ETankActions.GetGunsSuccess: {
            return {
                ...state,
                guns: action.payload
            };
        }
        default:
            return state;
    }
}