import React from "react";
import About from "../about/about";
import Todo from "../todo/todo";

// TODO
// import 'modules/bootstrap/dist/css/bootstrap.min.css'
// import 'modules/font-awesome/css/font-awesome.min.css'

export default function App(props) {
    return (
        <div className="App">
            <h1>Olá Mundo do React Denovo!!</h1>
            <Todo />
            <About />
        </div>
    )
}