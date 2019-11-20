import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={s.nav}>
          <div className={`${s.item} ${s.active}`}><NavLink to='/profile'
                                                            activeClassName={s.activeLink}>Profile</NavLink></div>
          <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
          <div className={s.item}><a href='/news'>News</a></div>
          <div className={s.item}><a href='/music'>Music</a></div>
          <div className={s.item}><a href='/settings'>Settings</a></div>
          <div className={s.friends}>
              <h3>Friends</h3>
              <div className={s.friends_item}><img src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png" alt=""/>Леонид</div>
              <div className={s.friends_item}><img src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png" alt=""/>Андрей</div>
              <div className={s.friends_item}><img src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png" alt=""/>Дмитрий</div>
          </div>
      </nav>
  )
}

export default Navbar;