import './App.css'
import React from "react"
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import { BrowserRouter as Router } from 'react-router-dom';

function App(props) {
    return (
        <div className="App">
            <Router>
                <Menu></Menu>
                <Content></Content>
            </Router>
        </div>
    )
}

export default App