import React from "react";

export default function TodoList(props) {

    const list = props.items.map((item) => {
        return (
            <li key={item.id}>
                {item.description}
            </li>
        )
    });

    return (
        <div>
            <h1>List</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}