import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Offices from "./components/Offices/Offices";
import Employees from "./components/Employees/Employees";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}
                    />}/>
                <Route exact path='/profile' render={() =>
                    <Profile store={props.store}/>}/>
                <Route path='/offices' render={() =>
                    <Offices data={props.state.officePage}/>}/>
                <Route path='/employees' render={() =>
                    <Employees/>}/>
            </div>
        </div>
    );
}

export default App;