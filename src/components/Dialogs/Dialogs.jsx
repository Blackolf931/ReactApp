import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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
                              value={newMessageBody}
                              placeholder="Message"/>
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={onSendMessageClick}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs