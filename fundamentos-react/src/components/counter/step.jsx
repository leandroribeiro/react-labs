import React, { Component } from "react";

export default class Step extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor="stepInput">Passo:</label>
                <input type="number"
                    name="stepInput"
                    id="stepInput"
                    style={{ fontSize: '1.4rem', width: '60px' }}
                    value={this.props.step}
                    onChange={e => this.props.onStepChange(+e.target.value)} />
            </div>
        )
    }
}