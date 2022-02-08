import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <React.Fragment>
            <button className='button'>{props.label}</button>
        </React.Fragment>
    )
}