import React from "react";
import s from '../Header.module.css';
import {Button} from "@mui/material";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' className={s.header_img}/>

        <div className={s.loginBlock}>
            {
                props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <Button href={'/login'}>Login</Button>
            }
        </div>

    </header>
}
export default Header