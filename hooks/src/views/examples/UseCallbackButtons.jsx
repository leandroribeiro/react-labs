import React, { useState } from 'react'

function UseCallbackButtons(props) {
    console.log('render!');

    return (
        <div>
            <button className="btn" onClick={e => props.inc(6)}>+6</button>
            <button className="btn" onClick={e => props.inc(12)}>+12</button>
            <button className="btn" onClick={e => props.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)
