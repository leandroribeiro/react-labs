import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

function Menu(props) {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/param/9999">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/texto">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/nao-existe">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu