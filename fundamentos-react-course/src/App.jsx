import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aluno from './components/basicos/Aluno';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Pai from './components/basicos/Pai';
import Filho from './components/basicos/Filho';
import ListaAluno from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOrImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import Card from './components/layout/Card';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import MyInput from './components/formulario/Input';

// Approach 1
// export default function(props) {

// Approach 2
// export default (props) => {

// Approach 3
// export default props => {

// Approach 4
// export default () => {

// Approach 5
// export default _ => {

// Approach 6 ( without return )
// export default _ =>  ()

// Approach 7 ( without return )
// export default () =>  ()

// Approach 8
// export default function NAME(props) {

export default function App(props) {
    const tag = <strong>Olá Galáxia</strong>

    return (
        <div className='App'>
            <h1>Fundamentos React - Course</h1>

            <div className='Cards'>

                <Card titulo="#13 - Componente Controlado" cor="pink">
                    <MyInput></MyInput>
                </Card>

                <Card titulo="#12 - Comunicação Indireta" cor="yellow">
                    <IndiretaPai />
                </Card>

                <Card titulo="#11 - Comunicação Direta" cor="green">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#10 - Condicional">
                    <ParOrImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Jumento' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ nome: '' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{}}></UsuarioInfo>
                    <UsuarioInfo></UsuarioInfo>
                </Card>

                <Card titulo="#09 - Desafio 2" cor="blue">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#08 - Repetição" cor="pink">
                    <ListaAluno />
                </Card>

                <Card titulo="#07" cor="purple">
                    <Pai sobrenome="da Roça">
                        <Filho nome="Pedro"></Filho>
                        <Filho nome="Thiago"></Filho>
                        <Filho nome="João"></Filho>
                    </Pai>
                </Card>

                <Card titulo="#06 - Desafio Aleatório" cor="red">
                    <Aleatorio max={100} min={10}></Aleatorio>
                </Card>

                <Card titulo="#05 - Fragmento" cor="green">
                    <Fragmento />
                </Card>

                <Card titulo="#04 - Com Parâmetro 1" cor="blue">
                    <Aluno
                        titulo='Situação do Aluno'
                        aluno='Pedro'
                        nota={9.3}>
                    </Aluno>
                </Card>

                <Card titulo="#03 - Com Parâmetro 2" cor="pink">
                    <ComParametro
                        titulo='Eu sou um título'
                        subtitulo='Very nice :)'>
                    </ComParametro>
                </Card>

                <Card titulo="#02 - Primeiro Componente" cor="purple">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="#01 - Html Inline">
                    {tag}
                </Card>
            </div>
        </div>)
}