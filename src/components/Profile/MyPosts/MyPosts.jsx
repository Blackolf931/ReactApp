import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {Button} from "@mui/material";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Posts message={p.message} countsLike={p.countsLike}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}/>
            </div>
            <div>
                <Button variant="contained" color="success" onClick={addPost}>
                    Add Post
                </Button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;