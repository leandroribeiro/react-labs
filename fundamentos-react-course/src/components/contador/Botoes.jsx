import React from "react"

export default function Botoes(props) {
    return (
        <React.Fragment>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </React.Fragment>
    )
}

// class Botoes extends Component {

//     constructor(props) {
//         super(props)

//         // this.state = {
//         // }

//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default Botoes;