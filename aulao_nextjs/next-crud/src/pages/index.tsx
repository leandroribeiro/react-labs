import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import {Fragment, useEffect, useState} from "react";
import ClienteRepository from "../core/ClienteRepository";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";

export default function Home() {

    const repo: ClienteRepository = new ColecaoCliente();

    const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela');
    const [cliente, setCliente] = useState(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([]);


    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obter().then(clientes => {
            setClientes(clientes);
            setVisivel('tabela');
        });
    }

    function clienteSelecionado(model: Cliente) {
        setCliente(model);
        setVisivel('formulario');
    }

    async function clienteExcluido(model: Cliente) {
        await repo.excluir(model);
        obterTodos();
    }

    function quandoCancelar() {
        setVisivel('tabela');
    }

    async function quandoSalvar(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio);
        setVisivel('formulario');
    }

    return (
        <div
            className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout titulo="Cadastro Simples">
                {visivel === 'tabela' ? (
                    <Fragment>
                        <div className="flex justify-end">
                            <Botao cor="green" className="mb-4"
                                   onClick={() => novoCliente()}>Novo Cliente</Botao>
                        </div>
                        <Tabela clientes={clientes}
                                clienteExcluido={clienteExcluido}
                                clienteSelecionado={clienteSelecionado}/>
                    </Fragment>
                ) : (
                    <Formulario cliente={cliente} quandoCancelar={quandoCancelar} quandoSalvar={quandoSalvar}/>
                )}
            </Layout>
        </div>
    )
}
