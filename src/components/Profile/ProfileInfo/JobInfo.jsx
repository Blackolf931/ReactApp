import React from "react";

let JobInfo = (props) => {
    return (
        <div>
            <div>
                Looking Job: {props.profile.lookingForAJob === true ? "Searching for a job": "No searching a job"}
              </div>
            <div>Job
                Description: {props.profile.lookingForAJobDescription === null ? "No information" : props.profile.lookingForAJobDescription}</div>
        </div>
    )
}
export default JobInfo
