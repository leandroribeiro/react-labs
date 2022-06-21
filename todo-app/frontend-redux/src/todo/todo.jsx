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
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleTodo = this.handleTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
        // this.refresh();
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
            .finally(() => {
                this.refresh();
            });
    }

    handleRemove(todo) {
        fetch(`${URL}/${todo.id}`, { method: "DELETE" })
            .catch(error => console.error(error))
            .finally(_ => {
                this.refresh(this.getDescription());
            });
    }

    handleDone(todo) {
        fetch(`${URL}/${todo.id}`, {
            method: "PUT",
            body: JSON.stringify({
                ...todo,
                done: true
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .catch(error => console.error(error))
            .finally(_ => {
                this.refresh(this.getDescription());
            });
    }

    handleTodo(todo) {
        fetch(`${URL}/${todo.id}`, {
            method: "PUT",
            body: JSON.stringify({
                ...todo,
                done: false
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .catch(error => console.error(error))
            .finally(_ => {
                this.refresh(this.getDescription());
            });
    }

    handleSearch() {
        this.refresh(this.getDescription());
    }

    handleClear() {
        this.refresh();
    }

    refresh(textSearch = '') {
        let search = textSearch ? `&regex=${textSearch}` : '';

        fetch(`${URL}?sort=-createdAt${search}`, { method: "GET" })
            .then((response) => response.json())
            .then((tasks) => {
                this.setDescription(textSearch);
                this.setItems(tasks);
            })
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Grid cols="6">
                    <TodoForm
                        handleAdd={this.handleAdd}
                        description={this.getDescription()}
                        handleChange={this.handleChange}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear}></TodoForm>
                    <TodoList
                        // items={this.getItems()}
                        handleRemove={this.handleRemove}
                        handleDone={this.handleDone}
                        handleTodo={this.handleTodo}></TodoList>
                </Grid>
            </div>
        )
    }

}
