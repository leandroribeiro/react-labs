export function number_add2(dispatch) {
    dispatch({ type: 'number_add2' });
}

export function number_multiplier(dispatch) {
    dispatch({ type: 'number_multiplier' });
}

export function number_split(dispatch) {
    dispatch({ type: 'number_split' });
}


export function number_round(dispatch) {
    dispatch({ type: 'number_round' });
}

export function number_setNumber(dispatch, n) {
    dispatch({ type: 'number_setNumber', payload: { number: n } });
}