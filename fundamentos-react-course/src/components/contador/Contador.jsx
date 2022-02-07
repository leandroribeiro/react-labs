import './Contador.css'
import react, { Component } from "react"
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'


class Contador extends Component {
    // Approach A1
    // state = {
    //     numero: this.props.numeroInicial
    // }

    // Approach A2
    constructor(props) {
        super(props)

        this.state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passo || 10
        }

        // Approach B1
        // this.inc = this.inc.bind(this)
    }

    // Approach B2
    // inc = () => {
    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }


    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso(novoPasso) {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display
                    numero={this.state.numero}></Display>
                <PassoForm
                    passo={this.state.passo}
                    setPasso={this.setPasso}></PassoForm>
                <Botoes
                    setInc={_ => this.inc()}
                    setDec={_ => this.dec()}
                ></Botoes>
            </div>
        )
    }
}

export default Contador;