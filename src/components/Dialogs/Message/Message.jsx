import React from "react";
import s from './../Dialogs.module.css'
import {TextField} from "@mui/material";

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}

        </div>
    )

}
export default Message