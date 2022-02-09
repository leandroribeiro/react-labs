import react, { Component } from "react"
import Button from "../components/Button"
import Display from "../components/Display"

import './Calculator.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    valuesIndex: 0
}

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = initialState;
    }


    clearMemory() {
        this.setState(initialState);
    }

    setOperation(operation) {
        if (this.state.valuesIndex === 0) {
            this.setState({
                operation: operation,
                clearDisplay: true,
                valuesIndex: 1
            });
        }
        else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch (error) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                valuesIndex: equals ? 0 : 1,
                clearDisplay: !equals,
                values: values
            })
        }

    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;

        this.setState({
            displayValue: displayValue,
            clearDisplay: false
        });

        if (digit !== '.') {
            const i = this.state.valuesIndex;
            const values = [...this.state.values];
            values[i] = parseFloat(displayValue);

            // console.log(values);

            this.setState({
                values: values,
            });

        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={_ => this.clearMemory()} triple />
                <Button label="/" click={e => this.setOperation(e)} operation />
                <Button label="7" click={e => this.addDigit(e)} />
                <Button label="8" click={e => this.addDigit(e)} />
                <Button label="9" click={e => this.addDigit(e)} />
                <Button label="*" click={e => this.setOperation(e)} operation />
                <Button label="4" click={e => this.addDigit(e)} />
                <Button label="5" click={e => this.addDigit(e)} />
                <Button label="6" click={e => this.addDigit(e)} />
                <Button label="-" click={e => this.setOperation(e)} operation />
                <Button label="1" click={e => this.addDigit(e)} />
                <Button label="2" click={e => this.addDigit(e)} />
                <Button label="3" click={e => this.addDigit(e)} />
                <Button label="+" click={e => this.setOperation(e)} operation />
                <Button label="0" click={e => this.addDigit(e)} double />
                <Button label="." click={e => this.addDigit(e)} />
                <Button label="=" click={e => this.setOperation(e)} operation />
            </div>
        )
    }
}