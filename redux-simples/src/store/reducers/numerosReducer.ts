import {INumeroState, NumeroAction} from "../numeros.types";
import {NumeroActionTypes} from "../actions/numerosActionTypes";

const INITIAL_STATE = {
    min: 10,
    max: 100
}

export default function (state: INumeroState = INITIAL_STATE, action: NumeroAction) {
    switch (action.type) {
        case NumeroActionTypes.NUM_MIN_SET:
            return {
                ...state,
                min: action.payload
            }
        case NumeroActionTypes.NUM_MAX_SET:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state;
    }
}
