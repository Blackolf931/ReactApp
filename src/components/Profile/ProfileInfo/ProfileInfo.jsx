import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {Avatar} from "@mui/material";
import Contacts from "./Contacts";
import JobInfo from "./JobInfo";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger;
    return (
        <div>
            <div>
                <img
                    src='https://static.remove.bg/remove-bg-web/d5091d1b7f1d072d8add9f16dca7347a1e72d77c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'/>
            </div>
            <div className={s.descriptionBlock}>
                <Avatar alt="Remy Sharp" src={props.profile.photos.large} sx={{width: 100, height: 100}}/>
               <Contacts profile={props.profile}/>
                <JobInfo profile={props.profile}/>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;