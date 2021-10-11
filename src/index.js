import React from 'react';
import './index.css';
import state from'./redux/state'
import reportWebVitals from './reportWebVitals';
import {rerenderEntireThree} from "./render";


rerenderEntireThree(state);

reportWebVitals();
