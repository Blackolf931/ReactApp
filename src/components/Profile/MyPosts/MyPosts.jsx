import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Posts message='Hello world' countsLike='2'/>
            <Posts message='Hi, how are you?' countsLike='3'/>
        </div>
    </div>
}
export default MyPosts;