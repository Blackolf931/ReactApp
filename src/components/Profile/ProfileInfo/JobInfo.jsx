import React from "react";
import findJob from "../../../assets/images/findJob.png"
import notFindJob from "../../../assets/images/notFoundJob.png"
import {Avatar} from "@mui/material";

let JobInfo = (props) => {
    return (
        <div>
            About job :
            <div><span>Looking Job: {props.profile.lookingForAJob === true ? <Avatar src={findJob} sx={{height: 30, width: 50}}/> :  <Avatar src = {notFindJob} sx={{height: 30, width: 50}}/>}</span></div>
        <div>Job Description: {props.profile.lookingForAJobDescription === null ? "Mo information": props.profile.lookingForAJobDescription}</div>
        </div>
    )
}
export default JobInfo
