import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [value, setValue] = useState(0);

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <span className="text">
                    {value}
                </span>
                <div>
                    <button className="btn" onClick={_ => setValue(value + 1)}>+1</button>
                    <button className="btn" onClick={_ => setValue(value - 1)}>-1</button>
                    <button className="btn" onClick={_ => setValue(100)}>100</button>
                    <button className="btn" onClick={_ => setValue(c => c + 100)}>+100</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
        </div>
    )
}

export default UseState
