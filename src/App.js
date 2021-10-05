import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Offices from "./components/Offices/Offices";
import Employees from "./components/Employees/Employees";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path = '/profile' component={Profile}/>
                    <Route path ='/offices' component={Offices}/>
                    <Route path='/employees' component={Employees}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
