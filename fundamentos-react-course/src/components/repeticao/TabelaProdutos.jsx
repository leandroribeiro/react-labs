import './TabelaProdutos.css'
import react from "react"
import produtos from '../../data/produtos'

// Desafio 2
export default function TabelaProdutos(props) {
    const linhas = produtos.map((model, i) => {
        return (
            <tr key={model.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{model.id}</td>
                <td>{model.nome}</td>
                <td>R$ {model.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    });

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    )
}