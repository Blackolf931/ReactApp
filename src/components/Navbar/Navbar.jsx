import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </ul>
            <ul className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </ul>
            <ul className={classes.item}>
                <NavLink to="/employees" activeClassName={classes.activeLink}>Employees</NavLink>
            </ul>
            <ul className={classes.item}>
                <NavLink to="/offices" activeClassName={classes.activeLink}>Offices</NavLink>
            </ul>
            <ul className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </ul>
            <ul className={classes.item}>
                <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </ul>
        </nav>
    )
}
export default Navbar