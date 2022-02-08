import React from 'react'
import './Display.css'

export default function Display(props) {
    return (
        <React.Fragment>
            <div className='display'>{props.value}</div>
        </React.Fragment>
    )
}