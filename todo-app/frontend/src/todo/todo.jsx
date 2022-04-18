import React, { Component } from "react";

import Grid from "../template/grid";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3003/api/todo';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        this.refresh();
    }

    setDescription(value) {
        this.setState({ ...this.state, description: value })
    }

    getDescription() {
        return this.state.description;
    }

    setItems(value) {
        this.setState({ ...this.state, list: value })
    }

    getItems() {
        return this.state.list;
    }

    handleChange(e) {
        this.setDescription(e.target.value);
    }

    handleAdd() {
        let currentDescription = this.getDescription();

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                description: currentDescription,
                done: false
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            // .then(json => console.log(json))
            .finally(() => {
                this.refresh();
            });
    }

    refresh() {
        try {
            fetch(URL, { method: "GET" })
                .then((response) => response.json())
                .then((tasks) => {
                    this.setDescription('');
                    this.setItems(tasks);
                })
            // .then((data) => console.log(data));            
        } catch (error) {
            console.error(error);
        }

    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Grid cols="6">
                    <TodoForm
                        handleAdd={this.handleAdd}
                        description={this.getDescription()}
                        handleChange={this.handleChange}></TodoForm>
                    <TodoList
                        items={this.getItems()}></TodoList>
                </Grid>
            </div>
        )
    }

}