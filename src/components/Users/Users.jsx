import style from "./user.module.css";
import userPhoto from "../../assets/images/user.png";
import {Button, Pagination} from "@mui/material";
import React from "react";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <img src={u.photos.value != null ? u.photos : userPhoto} className={style.userPhoto}/>
                    </div>
                <div>
                    {u.followed ? <Button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</Button> : <Button onClick={() => {
                        props.follow(u.id)
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
                        this.props.onPageChanged(e.currentTarget.getElementsByTagName("MuiButtonBase-root").item())
                    }}>{props.currentPage}</Pagination>
    </div>
}
export default Users