import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

	return (
        <div className={s.item}>
            <img src="https://resizing.flixster.com/hMGL-rLPoWfSb7asA6OkCoNKQEU=/206x305/v1.bTsxMTE3Njc5MjtqOzE4MjY0OzEyMDA7ODAwOzEyMDA" alt=""/>
            {props.message}
            <div>
                <span>Like {props.likescount}</span>
            </div>
        </div>
	)
}

export default Post;