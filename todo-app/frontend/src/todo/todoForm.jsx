import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default function TodoForm(props) {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}/>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton
                    style="primary"
                    icon="plus"
                    onClick={props.handleAdd}
                    text="add"></IconButton>
                <IconButton
                    style="info"
                    icon="search"
                    onClick={props.handleSearch}
                    text="search"></IconButton>
                <IconButton
                    style="info"
                    icon="search"
                    onClick={props.handleClear}
                    text="clear"></IconButton>
            </Grid>
        </div>
    )
}
