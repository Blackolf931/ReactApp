import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Offices from "./components/Offices/Offices";
import Employees from "./components/Employees/Employees";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() =>

                    <Dialogs addMessage={props.addMessage}
                             updateNewMessageTest={props.updateNewMessageText}
                             store={props.store}
                    />}/>
                <Route exact path='/profile' render={() =>
                    <Profile profilePage={props.state.profilePage}
                             dispatch={props.dispatch}/>}/>
                <Route path='/offices' render={() =>
                    <Offices data={props.state.officePage}/>}/>
                <Route path='/employees' render={() =>
                    <Employees/>}/>
            </div>
        </div>
    );
}

export default App;