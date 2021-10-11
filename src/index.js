import './index.css';
import state from './redux/state'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireThree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 addMessage ={store.addMessage.bind(store)}
                 updateNewMessageText = {store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree)

reportWebVitals();
