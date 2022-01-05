import style from "./user.module.css";
import userPhoto from "../../assets/images/user.png";
import {Button, Pagination} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";


let User = ({user,followingInProgress,unfollow,follow }) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.value ? user.photos : userPhoto} className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</Button> :

                            <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</Button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
    </div>
    )
}
export default User