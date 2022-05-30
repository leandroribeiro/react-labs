import {combineReducers, createStore} from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
    numeros: numerosReducer
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;
