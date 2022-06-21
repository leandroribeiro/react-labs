export const TodoActionTypes = {
    DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED'
}

export const changeDescription = (event) => ({
    type: TodoActionTypes.DESCRIPTION_CHANGED,
    payload: event.target.value
})
