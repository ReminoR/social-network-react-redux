import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

console.log(s);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likesCount}/>);

	return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
	)
}

export default MyPosts;