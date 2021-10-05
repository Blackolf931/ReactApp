import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Matvey" id="1"/>
                <DialogItem name="Alexandra" id="2"/>
                <DialogItem name = "Ilia" id = "3"/>
                <DialogItem name = "Viktoria" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message ="Hello"/>
                <Message message ="How are you?"/>
                <Message message ="Hi"/>
            </div>
        </div>
    )
}
export default Dialogs