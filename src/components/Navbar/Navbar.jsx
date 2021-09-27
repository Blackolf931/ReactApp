import React from "react";
import classes from '../Navbar.module.css'

const Navbar= () => {
    return <nav className={classes.nav}>
        <ul className={classes.item}>
            <a>Profile</a>
        </ul>
        <ul className={classes.item}>
            <a>Messages</a>
        </ul>
        <ul className={classes.item}>
            <a>News</a>
        </ul>
        <ul className={classes.item}>
            <a>Music</a>
        </ul>
        <ul className={classes.item}>
            <a>Settings</a>
        </ul>
    </nav>
}
export default  Navbar