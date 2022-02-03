import React, { Component } from "react";

export default class Display extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Valor : {this.props.value}</h4>
            </div>
        )
    }
}