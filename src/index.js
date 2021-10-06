import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Matvey'},
    {id: 2, name: 'Alexandra'},
    {id: 3, name: 'Ilia'},
    {id: 4, name: 'Viktoria'}]
let messages =[
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you?'},
    {id:3, message: 'Hi'}
]
let posts =[
    {id:1, message: 'Hello world', countsLike: 2},
    {id:2, message: 'Hi, how are you?', countsLike: 13},
]
let information = [
    {id:1, address: 'Mogilev', officeName: 'MyOffice', country:'Belarus'},
    {id:1, address: 'Mogilev', officeName: 'MyOffice', country:'Belarus'},
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages={messages} posts={posts} officeInformation={information}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
