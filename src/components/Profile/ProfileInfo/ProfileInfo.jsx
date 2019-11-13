import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                description block
            </div>
        </div>
    )
}

export default ProfileInfo;