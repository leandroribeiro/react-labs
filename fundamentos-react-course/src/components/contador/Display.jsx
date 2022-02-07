import React from "react"

export default function Display(props) {
    return (
        <div>
            <h3>{props.numero}</h3>
        </div>
    )
}

// class Display extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             numero: this.props.numero || 0
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h3>{this.state.numero}</h3>
//             </div>
//         )
//     }
// }

// export default Display;