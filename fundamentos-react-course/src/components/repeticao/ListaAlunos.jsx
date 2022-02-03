import react from "react"
import alunos from '../../data/alunos'

export default function ListaAluno(props) {
    const lista = alunos.map((model) => {
        return (
            <li key={model.id}>
                {model.id} {model.nome} -&gt; {model.nota}
            </li>
        )
    });

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lista}
            </ul>
        </div>
    )
}