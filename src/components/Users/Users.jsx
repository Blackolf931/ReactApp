import style from "./user.module.css";
import userPhoto from "../../assets/images/user.png";
import {Button, Pagination} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.value != null ? u.photos : userPhoto} className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <Button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY" : "a632b571-d1bd-4283-83c5-241da0bc73f5"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</Button> :

                            <Button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY" : "a632b571-d1bd-4283-83c5-241da0bc73f5"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }}>Follow</Button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )
        }
        <Pagination count={pagesCount} variant="outlined" color="primary" defaultPage={1}
                    onClick={(e) => {
                        pages.map(p => {
                            props.onPageChanged(p)
                        })
                    }}>{props.currentPage}</Pagination>
    </div>
}
export default Users