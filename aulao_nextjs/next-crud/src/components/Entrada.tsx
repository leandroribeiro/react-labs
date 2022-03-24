interface EntradaProps {
    valor: any;
    somenteLeitura?: boolean,
    tipo?: 'text' | 'number',
    texto: string,
    className?: string
    onChange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">{props.texto}</label>
            <input
                className={`border-purple-500 rounded-lg focus:outline-none bg-gray-200 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'} text-gray-800`}
                type={props.tipo ?? 'text'}
                // name=""
                // id=""
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={(e) => props.onChange?.(e.target.value)}
            />
        </div>
    )
}
