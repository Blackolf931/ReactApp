import React from "react";
import {Button, debounce} from "@mui/material";
import style from "./user.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                props.setUsers(response.data.items);
            });
        }
    }

    return <div>
        <Button onClick={getUsers}>Get Users</Button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <img src={u.photos != null ? u.photos: userPhoto} className={style.userPhoto}/>
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
        </div>
}

export default Users;
