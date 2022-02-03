import react from "react"

export default function ParOrImpar(props) {
    return (
        <div>
            {/* Approach 1 */}
            {
                props.numero % 2 === 0
                    ? <span>Par</span>
                    : <span>Impar</span>
            }

        </div>
    )
}