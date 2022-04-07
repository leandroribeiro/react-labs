import React, { Component } from "react";
import Grid from "../template/grid";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        console.log('aaaaaaaaaaaaaaaaaaaaaa');
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Grid cols="6">
                    <TodoForm handleAdd={this.handleAdd}></TodoForm>
                    <TodoList></TodoList>
                </Grid>
            </div>
        )
    }

}