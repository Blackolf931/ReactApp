import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import officeReducer from "./office-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    officePage: officeReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;