import React from "react";
import {Button} from "@mui/material";
import style from "./user.module.css";

let Users = (props) => {
    if(props.users.length === 0){
    props.setUsers( [
        {
            id: 1,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: true,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 2,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: false,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 3,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: true,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
    ])
    }

    return (
        <div>{
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <img src={u.photoURL} className={style.userPhoto}/>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
                </div>
            )
        }
        </div>
    )
}

export default Users;
