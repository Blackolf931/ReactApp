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
        let text = newMessageItem.current.value;
        console.log(newMessageItem.current.value);
        alert(text);
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea label="Message" variant="filled" ref={newMessageItem} />

                    {/*<textarea ref={newMessageItem}/>*/}
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={sendMessage}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs