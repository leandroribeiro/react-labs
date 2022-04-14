import React, { Component } from "react";
import axios from 'axios';

import Grid from "../template/grid";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { internalIPSync } from "webpack-dev-server";

const URL = 'http://localhost:3003/api/todos';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        let currentDescription = this.state.description;

        /*
        this.state.list.push(currentDescription);
        this.setState({ ...this.state, description: '' });

        // TODO debug
        console.log(this.state);
        */

        axios.post(URL, { description })
            .then(resp => console.log('WORKS!!!!!'));

        // this.refresh();
    }

    // refresh() {
    //     let items = axios.get(`${URL}?sort=-createdAt`)
    //         .then(resp => { return resp.data; })
    //         .then(r2 => console.log(r2));

    //     // this.setState({ ...this.state, description: '', list: items });
    // }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <Grid cols="6">
                    <TodoForm
                        handleAdd={this.handleAdd}
                        description={this.state.description}
                        handleChange={this.handleChange}></TodoForm>
                    <TodoList></TodoList>
                </Grid>
            </div>
        )
    }

}