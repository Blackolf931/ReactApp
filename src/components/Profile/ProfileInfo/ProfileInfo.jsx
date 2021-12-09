import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {Avatar} from "@mui/material";
import Contacts from "./Contacts";
import JobInfo from "./JobInfo";
import userAvatar from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <Avatar alt="Remy Sharp"
                        src={props.profile.data.photos.large == null ? userAvatar : props.profile.data.photos.large}
                        sx={{width: 100, height: 100}}/>
                <div> {props.profile.fullName}</div>
                <ProfileStatus status ={props.status} updateStatus = {props.updateStatus}/>
                <Contacts profile={props.profile}/>
                <JobInfo profile={props.profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo;