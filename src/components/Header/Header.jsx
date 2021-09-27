import React from "react";
import s from '../Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' className ={s.header_img}/>
    </header>
}
export default  Header