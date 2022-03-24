import Entrada from "./Entrada";
import {useState} from "react";
import Botao from "./Botao";
import Cliente from "../core/Cliente";

interface FormularioProps {
    cliente: Cliente,
    quandoCancelar?: () => void,
    quandoSalvar?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Entrada valor={id} texto={"Código"} somenteLeitura={true} className={"mb-5"}/>
            ) : false}
            <Entrada
                valor={nome}
                texto={"Nome"}
                onChange={setNome}
                className={"mb-5"}/>
            <Entrada
                valor={idade}
                tipo={"number"}
                texto={"Idade"}
                onChange={setIdade}
                className={"mb-5"}/>
            <div className={"flex justify-end mt-3"}>
                <Botao cor={"blue"} className={"mr-2"}
                       onClick={() => props.quandoSalvar?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.quandoCancelar}>Cancelar</Botao>
            </div>
        </div>

    )
}
