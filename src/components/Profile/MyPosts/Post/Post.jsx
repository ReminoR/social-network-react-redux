import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

	return (
        <div className={s.item}>
            <img src='https://c7.alamy.com/comp/J79NCA/avatar-man-with-beard-icon-cartoon-style-J79NCA.jpg' alt=""/>
            {props.message}
            <div>
                <span>Like {props.likescount}</span>
            </div>
        </div>
	)
}

export default Post;