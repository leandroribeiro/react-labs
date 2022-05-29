import {createStore, combineReducers} from "redux";
import {NumeroActionTypes} from "./numeros.types";

interface IRootState {
    numeros: {
        min: number,
        max: number
    };
}

const INITIAL_STATE = {
    min: 10,
    max: 100
}


const reducers = combineReducers({
    numeros: function (state: IRootState, action) {
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
                return INITIAL_STATE
        }
    }
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;
