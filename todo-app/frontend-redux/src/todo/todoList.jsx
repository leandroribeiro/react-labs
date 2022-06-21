import React from "react";
import {connect} from "react-redux";
import IconButton from '../template/iconButton'

const TodoList = function (props) {

    const items = props.items || [];
    const list = items.map((item) => {
        return (
            <li key={item._id}>
                [{item.done ? "*" : " "}]&nbsp;&nbsp;
                {item.description}&nbsp;&nbsp;&nbsp;&nbsp;
                <IconButton onClick={() => props.handleDone(item)} text="done" hide={item.done}/>&nbsp;&nbsp;
                <IconButton onClick={() => props.handleTodo(item)} text="undo" hide={!item.done}/>&nbsp;&nbsp;
                <IconButton onClick={() => props.handleRemove(item)} text="del" hide={!item.done}/>
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

const mapStateToProps = state => ({items: state.todo.list});
export default connect(mapStateToProps)(TodoList);
