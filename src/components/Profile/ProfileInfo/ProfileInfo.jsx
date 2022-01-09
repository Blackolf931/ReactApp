import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {Avatar, Button} from "@mui/material";
import Contacts from "./Contacts";
import JobInfo from "./JobInfo";
import userAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status,updateStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <Avatar alt="Remy Sharp"
                        src={profile.photos.large == null ? userAvatar : profile.photos.large}
                        sx={{width: 100, height: 100}}/>
                {isOwner && <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        onChange={onMainPhotoSelected}
                        type="file"
                        hidden
                    />
                </Button>}
                <div> {profile.fullName}</div>
                <ProfileStatusWithHooks status ={status} updateStatus = {updateStatus}/>
                <Contacts profile={profile}/>
                <JobInfo profile={profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo;