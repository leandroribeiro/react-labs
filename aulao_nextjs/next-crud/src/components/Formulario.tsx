import Entrada from "./Entrada";
import {useState} from "react";
import Botao from "./Botao";

export default function Formulario(props) {
    const id = props.cliente?.id ?? null;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (<Entrada valor={id} texto={"Código"} somenteLeitura={true} className={"mb-5"}/>) : false}
            <Entrada valor={nome} texto={"Nome"} quandoAlterar={setNome} className={"mb-5"}/>
            <Entrada valor={idade} tipo={"number"} texto={"Idade"} quandoAlterar={setIdade} className={"mb-5"}/>
            <div className={"flex justify-end mt-3"}>
                <Botao cor={"blue"} className={"mr-2"}>{id ? 'Alterar': 'Salvar'}</Botao>
                <Botao>Cancelar</Botao>
            </div>
        </div>

    )
}
