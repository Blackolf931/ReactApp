import React from 'react';
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                validate={[required]}
                />
            </div>
            <div><Field placeholder={"Password"}
                        name={"password"}
                        component={Input}
                        validate={[required]}/></div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"}/> Remember me
            </div>
            <div>
                <button variant="contained">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formdata) => {
        console.log(formdata);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;