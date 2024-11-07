import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
// connecting REDUX-SIDE to REACT-SIDE
import { Provider } from "react-redux";
import { store } from "./store";

const rootEl = document.getElementById("root");

// const root = ReactDOM.createRoot(rootEl);
const root = createRoot(rootEl);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
