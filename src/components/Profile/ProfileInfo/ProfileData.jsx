import Contacts from "./Contacts";
import JobInfo from "./JobInfo";
import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import {Button} from "@mui/material";

const ProfileData = ({profile, isOwner, goToEditMode }) => {
    return (
        <div>
            <div> {profile.fullName}</div>

            <b>My contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
            <b>About job :</b>
            <JobInfo profile={profile}/>
            {isOwner && <Button variant="outlined" startIcon={<CreateIcon/>} onClick={goToEditMode}>
                Edit
            </Button>}
        </div>
    )
}

export default ProfileData;