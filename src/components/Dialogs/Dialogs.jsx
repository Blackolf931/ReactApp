import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessageItem = React.createRef();
    let sendMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageItem.current.value;
        props.updateNewMessageTest(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageItem}
                              placeholder="Message"/>
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={sendMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs