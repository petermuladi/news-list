
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";

//Root
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    //Redux provider
    <Provider store={store}>
        <App />
    </Provider>
)


