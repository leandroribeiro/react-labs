import React from "react";
import IconButton from '../template/iconButton'

export default function TodoList(props) {

    const items = props.items || [];
    const list = items.map((item) => {
        return (
            <li key={item.id}>
                [{item.done ? "*" : " "}]&nbsp;&nbsp;
                {item.description}&nbsp;&nbsp;&nbsp;&nbsp;
                <IconButton onClick={() => props.handleDone(item)} text="done" hide={item.done} />&nbsp;&nbsp;
                <IconButton onClick={() => props.handleTodo(item)} text="undo" hide={!item.done} />&nbsp;&nbsp;
                <IconButton onClick={() => props.handleRemove(item)} text="del" hide={!item.done} />
            </li>
        )
    });

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}