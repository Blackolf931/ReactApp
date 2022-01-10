import Contacts from "./Contacts";
import JobInfo from "./JobInfo";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import {Button} from "@mui/material";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls"
import {reduxForm} from "redux-form";
import style from "../../Common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>}
        <div>
            <b>{profile.fullName} : {CreateField("Full name", "fullName", [], Input)}</b>
        </div>

        <div>
            <b>About me</b> : {profile.aboutMe}
            {CreateField("About me", "aboutMe", [], Textarea,)}
        </div>

        <b>My contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key}>
            <b>{key} : {CreateField(key, "contacts." + key, [], Input)} </b>
        </div>
    })}
        <b>About job :</b>
        <div>
            <div>
                Looking Job: {profile.lookingForAJob === true ? "Searching for a job" : "No searching a job"}
                {CreateField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                Job
                Description: {profile.lookingForAJobDescription === null ? "No information" : profile.lookingForAJobDescription}
                {CreateField("Job Description", "lookingForAJobDescription", [], Textarea)}
            </div>
        </div>
        <Button variant="outlined" startIcon={<SaveIcon/>} onClick={
            handleSubmit
        }> Save</Button>
    </form>
}

const ProfileDataFormRedux = reduxForm({
    form: "edit-profile"
})(ProfileDataForm)

export default ProfileDataFormRedux;