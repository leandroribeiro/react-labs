import React, { cloneElement } from "react"
import react from "react"
import Filho from "./Filho"


export default function Pai(props) {
    return (
        <div>
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
            {/* {React.Children.map(props.children, (child) => {
                return cloneElement(child, props);
            })} */}
            {/* {props.children} */}

            {/* 
                Approach 1
                <Filho nome="Thiago" {...props}></Filho> 
            */}
            {/* 
                Approach 2
                <Filho nome="João" sobrenome={props.sobrenome}></Filho> 
            */}
        </div>
    )
}