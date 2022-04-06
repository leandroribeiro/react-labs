import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";
import Todo from "../todo/todo";

export default function Content() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/todos' element={<Todo />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
}