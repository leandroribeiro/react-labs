import React, { useState } from "react";

export default (props) => {

    const [nome, alterarNome] = useState('Pedro');

    return (
        <React.Fragment>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => alterarNome(e.target.value)} />
        </React.Fragment>
    );

};