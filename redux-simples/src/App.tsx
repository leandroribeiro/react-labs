import Card from './components/Card'
import './App.css'

export const App = () => {
    return (
        <div className="App">
            <h1>Exercício Redux (Simples)</h1>
            <div className="linha">
                <Card title='Titulo 1.1' green>texto 1.1</Card>
                <Card title='Titulo 1.2' green>texto 1.2</Card>
            </div>
            <div className="linha">
                <Card title="Titulo 2.1" red>texto 2.1</Card>
                <Card title="Titulo 2.2" red>texto 2.2</Card>
            </div>
        </div>
    )
}