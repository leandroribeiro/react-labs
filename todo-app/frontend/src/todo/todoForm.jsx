import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/icoButton";

export default function TodoForm(props) {
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton
                    style="primary"
                    icon="plus"
                    onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}