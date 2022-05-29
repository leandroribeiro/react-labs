import {NumeroActionTypes} from "../numeros.types";

function atribuirNumeroMinimo(novoValor: number){
    return {
        type: NumeroActionTypes.NUM_MIN_SET,
        payload: novoValor
    }
}

function atribuirNumeroMaximo(novoValor: number){
    return {
        type: NumeroActionTypes.NUM_MAX_SET,
        payload: novoValor
    }
}

export {
    atribuirNumeroMinimo,
    atribuirNumeroMaximo
};
