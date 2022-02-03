import React, { Fragment } from "react"

// Approach 1

export default function Fragmento() {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}

// Approach 2

// export default function Fragmento() {
//     return (
//         <>
//             <h2>Fragmento</h2>
//             <p>Cuidado com esse erro!</p>
//         </>
//     )
// }