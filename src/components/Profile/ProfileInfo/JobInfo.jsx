import React from "react";
import findJob from "../../../assets/images/findJob.png"
import notFindJob from "../../../assets/images/notFoundJob.png"

let JobInfo = (props) => {
    return (
        <div>
            About job :
            <div>Looking Job {props.profile.lookingForAJob === true ? <img src={findJob}/> : notFindJob}</div>
        </div>
    )
}
export default JobInfo
