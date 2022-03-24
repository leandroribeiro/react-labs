import ClienteRepository from "../core/ClienteRepository";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import {useEffect, useState} from "react";
import Cliente from "../core/Cliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepository = new ColecaoCliente();

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm();

    const [cliente, setCliente] = useState(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([]);


    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obter().then(clientes => {
            setClientes(clientes);
            exibirTabela()
        });
    }

    function clienteSelecionado(model: Cliente) {
        setCliente(model);
        exibirFormulario()
    }

    async function clienteExcluido(model: Cliente) {
        await repo.excluir(model);
        obterTodos();
    }

    function quandoCancelar() {
        exibirTabela()
    }

    async function quandoSalvar(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio);
        exibirFormulario()
    }

    return {
        novoCliente,
        quandoSalvar,
        clienteExcluido,
        clienteSelecionado,
        quandoCancelar,
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel
    }
}
