import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './main/app';
import rootReducer from "./main/reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
