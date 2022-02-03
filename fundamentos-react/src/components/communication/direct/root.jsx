import React from "react";
import Child from "./child";

function Root(props) {
    return <div>
        <Child {...props}><strong>Paulo</strong></Child>
        <Child sobrenome={props.sobrenome}>Thiago</Child>
        <Child sobrenome="Serra">João</Child>
    </div>
}

export default Root