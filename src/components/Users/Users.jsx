import style from "./user.module.css";
import userPhoto from "../../assets/images/user.png";
import {Button, Pagination} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";


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
                            <img src={u.photos.value ? u.photos : userPhoto} className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</Button> :

                            <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
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