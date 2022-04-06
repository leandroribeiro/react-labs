import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
    return (
        <nav className="navbar nav-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i> TodoApp
                    </Link>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/todos">Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}