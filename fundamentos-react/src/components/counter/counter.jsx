import React, { Component } from "react";
import Display from "./display";
import Step from "./step";
import Buttons from "./buttons";

export default class Contador extends Component {

    // this.state = {
    //     step: props.step,
    //     value: 0
    // }

    constructor(props) {
        super(props);

        this.state = {
            step: props.step || 1,
            value: props.value || 0,
        }
    }

    inc = () => {
        this.setState({
            value: this.state.value + this.state.step
        });
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step
        });
    }

    changeStep = (newValue) => {
        this.setState({ step: newValue })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Step
                    step={this.state.step}
                    onStepChange={this.changeStep}></Step>
                <Display
                    value={this.state.value}></Display>
                <Buttons
                    onInc={this.inc}
                    onDec={this.dec}></Buttons>
            </div>
        )
    }
}