import React from "react";
import If from "./if";

export default function IconButton(props) {
    const text = props.text || '+';

    return (
        <If test={!props.hide}>
            <button
                className={`btn btn-${props.style}`}
                onClick={props.onClick} >
                <i className={`fa fa-${props.icon}`}>{text}</i>
            </button>
        </If>

    )
}