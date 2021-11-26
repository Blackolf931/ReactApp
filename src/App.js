import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Offices from "./components/Offices/Offices";
import Employees from "./components/Employees/Employees";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer"


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() =>
                    <DialogsContainer />}/>
                <Route exact path='/profile' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/offices' render={() =>
                    <Offices/>}/>
                <Route path='/employees' render={() =>
                    <Employees/>}/>
            </div>
        </div>
    );
}

export default App;