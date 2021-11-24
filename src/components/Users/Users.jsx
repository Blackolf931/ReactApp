import React from "react";
import {Button, debounce} from "@mui/material";
import style from "./user.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
            <div>
                <span>1</span>
                <span className={style.selectedPage}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <img src={u.photos.value != null ? u.photos : userPhoto} className={style.userPhoto}/>
                    </div>
                <div>
                    {u.followed ? <Button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</Button> : <Button onClick={() => {
                        this.props.follow(u.id)
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
}

export default Users
