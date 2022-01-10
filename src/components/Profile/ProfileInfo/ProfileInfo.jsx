import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {Avatar, Button, IconButton, Input} from "@mui/material";
import userAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {PhotoCamera} from "@material-ui/icons";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMod] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMod(false);
        });
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <Avatar alt="Remy Sharp"
                        src={profile.photos.large == null ? userAvatar : profile.photos.large}
                        sx={{width: 100, height: 100}}/>
                {isOwner &&
                    <label htmlFor="icon-button-file">
                        <input accept="image/*" id="icon-button-file" type="file" onChange={onMainPhotoSelected}
                               hidden={true}/>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner}
                                 goToEditMode={() => {
                                     setEditMod(true)
                                 }}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;