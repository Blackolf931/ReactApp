import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return (<FormControl {...props}>{<textarea {...input} {...restProps}/>}</FormControl>)
}

export const Input = ({input, meta, ...props}) => {
    return (<input {...input} {...props}/>)
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
)