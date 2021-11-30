import React from "react";
import s from '../Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' className ={s.header_img}/>

        <div className={s.loginBlock}>
            {
                props.isAuth ? props.login :
                    <Button href={'/login'}>Login</Button>
            }
        </div>

    </header>
}
export default  Header