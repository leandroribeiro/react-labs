import {IconeEdicao, IconeLixo} from "./Icones";
import Cliente from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente[],
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? (<th className="text-center p-4">Ações</th>) : false}
            </tr>
        )
    }

    function renderLinhas(clientes: Cliente[]) {
        return (
            clientes?.map((cliente) => {
                return <tr key={cliente.id} className={ehPar(cliente.id) ? "bg-purple-400" : "bg-purple-200"}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderAcoes(cliente) : false}
                </tr>
            })
        )
    }

    function renderAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center items-center">
                {props.clienteSelecionado ?
                    (
                        <button
                            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
                            onClick={() => props.clienteSelecionado?.(cliente)}>
                            {IconeEdicao}
                        </button>
                    ) : false}
                {props.clienteExcluido ?
                    (
                        <button
                            className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50"
                            onClick={() => props.clienteExcluido?.(cliente)}>
                            {IconeLixo}
                        </button>
                    ) : false}
            </td>
        )
    }

    function ehPar(id) {
        return id % 2 == 0;
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
            {renderCabecalho()}
            </thead>
            <tbody>
            {renderLinhas(props.clientes)}
            </tbody>
        </table>
    )
}
