import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {Button} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../Common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Posts message={p.message} countsLike={p.countsLike} key ={p.id}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My Posts</h3>

        <div className={s.posts}>
            {postsElements}
            <AddPostFormRedux onSubmit={addNewPost}/>
        </div>
    </div>
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" component={Textarea} validate = {[required, maxLength]}
                    /* onChange={onPostChange}
                     ref={newPostElement}
                     value={props.newPostText}*/
                       placeholder="Add new post"/>
            </div>
            <div>
                <button variant="contained" color="success">
                    Add Post
                </button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddPostForm)



export default MyPosts;