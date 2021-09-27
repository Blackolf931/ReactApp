import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {
    return <div className='posts'>
        My Posts
        <div>
       <textarea/>
            <button>Add Post</button>
        </div>
            <div className={s.posts}>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
    </div>
}
export default MyPosts;