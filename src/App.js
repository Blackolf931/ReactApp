import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Offices from "./components/Offices/Offices";
import Employees from "./components/Employees/Employees";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/offices' render={() =>
                            <Offices/>}/>
                        <Route path='/employees' render={() =>
                            <Employees/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose
(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const MainApp = (props) => {
   return <BrowserRouter>
        <Provider store = {store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;