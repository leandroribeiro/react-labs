import React from "react";
import products from "../../data/products";

function getProdutosList(){
    return products.map(prod=>{
        return <li key={prod.id}>
            {prod.id} - {prod.nome} -> R$ {prod.preco}
            </li>
    });
}

function Repeat(props) {
    return <div>
        <h2>Repetição</h2>
        <ul>
            {getProdutosList()}
        </ul>
    </div>
}

export default Repeat