import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/index'
import { number_add2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">
                    {
                        state.user
                            ? <span className="text">{state.user.name}</span>
                            : <span className="text">anonimo</span>
                    }
                </span>
                <span className="text">
                    {state.number}
                </span>
                <div>

                    <button className="btn" onClick={() => login(dispatch)}>login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_setNumber', payload: { number: 1 } })}>set1</button>
                    <button className="btn" onClick={() => number_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_multiplier' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_split' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_round' })}>round</button>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
