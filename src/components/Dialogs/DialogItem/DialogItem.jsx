import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://c7.alamy.com/comp/J79NCA/avatar-man-with-beard-icon-cartoon-style-J79NCA.jpg' alt=""/>
            <NavLink to={path}  activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;