import React, { Component } from "react";

export default class Buttons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onInc}>inc</button>
                <button onClick={this.props.onDec}>dec</button>
            </div>
        )
    }
}