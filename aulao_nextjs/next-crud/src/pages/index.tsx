import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";

export default function Home() {

    const clientes = [
        new Cliente('Pedro', 30, '1'),
        new Cliente('Thiago', 32, '2'),
        new Cliente('João', 35, '3')
    ];

    function clienteSelecionado(model: Cliente) {
        console.log(`editar ${model.id} click!`);
    }

    function clienteExcluido(model: Cliente) {
        console.log(`excluir ${model.id} click!`);
    }

    return (
        <div
            className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout titulo="Cadastro Simples">
                <div className="flex justify-end">
                    <Botao cor="green" className="mb-4">Novo Cliente</Botao>
                </div>
                <Tabela clientes={clientes}
                        clienteExcluido={clienteExcluido}
                        clienteSelecionado={clienteSelecionado}/>
            </Layout>
            <Formulario/>
        </div>
    )
}
