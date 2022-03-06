export function reducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'number_multiplier':
            return { ...state, number: state.number * 7 }
        case 'number_split':
            return { ...state, number: state.number / 25 }
        case 'number_round':
            return { ...state, number: Math.round(state.number) }
        case 'number_setNumber':
            return { ...state, number: action.payload.number }
        case 'login':
            return { ...state, user: { name: action.payload.name } }
        default:
            return state;
    }
}