import React from "react";
import Menu from "../template/menu";
import { BrowserRouter as Router } from 'react-router-dom';
import Content from "./routes";

// TODO
// import 'modules/bootstrap/dist/css/bootstrap.min.css'
// import 'modules/font-awesome/css/font-awesome.min.css'

export default function App(props) {
    return (
        <div className="container App">
            <Router>
                <Menu />
                <Content></Content>
            </Router>
        </div>
    )
}