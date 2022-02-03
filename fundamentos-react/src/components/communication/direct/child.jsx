import React from "react";

function Child(props){
    return <div>
        <p>{props.children} {props.sobrenome}</p>
    </div>
}

export default Child