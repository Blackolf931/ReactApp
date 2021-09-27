import React from "react";
import s from './MyProfile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div>
        <img src='https://static.remove.bg/remove-bg-web/d5091d1b7f1d072d8add9f16dca7347a1e72d77c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' />
        </div>
    <div>
        ava + description
    </div>
        <MyPosts/>
</div>
}
export default Profile;