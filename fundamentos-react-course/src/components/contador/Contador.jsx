import './Contador.css'
import react, { Component } from "react"

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

    setPasso(e) {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Valor Inicial: {this.state.numero}</h3>
                <div>
                    <label
                        htmlFor="passoInput">Passo:</label>
                    <input
                        type="text"
                        name="passoInput"
                        id="passoInput"
                        value={this.state.passo}
                        onChange={e => this.setPasso(e)} />
                </div>
                <button onClick={_ => this.inc()}>+</button>
                <button onClick={_ => this.dec()}>-</button>
            </div>
        )
    }
}

export default Contador;