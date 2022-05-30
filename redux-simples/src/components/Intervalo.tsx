import './Intervalo.css'
import React, {Dispatch} from "react";
import Card from "./Card";
import {connect} from "react-redux";
import {atribuirNumeroMaximo, atribuirNumeroMinimo} from "../store/actions/numerosActions";


interface IRootState {
    numeros: {
        min: number,
        max: number
    };
}

interface IntervaloProps {
    atribuirMax: any;
    atribuirMin: any;
    min: number,
    max: number
}

function Intervalo(props: IntervaloProps) {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minímo:</strong>
                    <input type="number" value={props.min}
                           onChange={e => props.atribuirMin(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={props.max}
                        onChange={e=>props.atribuirMax(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

/*

//Our Type Imports
import { State } from '../../redux/root-reducer.types';
import { UserActions } from '../../redux/user/user.types';

const mapStateToProps = (state: State) => ({
	currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
	signOutStart: () => dispatch(signOutStart())
});


 */
function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        atribuirMin(novoValor: number) {
            const action = atribuirNumeroMinimo(novoValor);
            dispatch(action);
        },
        atribuirMax(novoValor: number){
            const action = atribuirNumeroMaximo(novoValor);
            dispatch(action);
        }
    }
}

function mapStateToProps(state: IRootState) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
