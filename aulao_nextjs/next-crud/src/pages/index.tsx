import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import {Fragment} from "react";
import useClientes from "../hooks/useClientes";

export default function Home() {

    const {
        tabelaVisivel,
        formularioVisivel,
        novoCliente,
        clienteExcluido,
        clienteSelecionado,
        quandoSalvar,
        quandoCancelar,
        cliente,
        clientes
    } = useClientes()

    return (
        <div
            className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout titulo="Cadastro Simples">
                {tabelaVisivel ? (
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
