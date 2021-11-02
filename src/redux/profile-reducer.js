const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState ={
    posts: [
        {id: 1, message: 'Hello world', countsLike: 2},
        {id: 2, message: 'Hi, how are you?', countsLike: 13},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                countsLike: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            return stateCopy;
        case updateNewPostText: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default :
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}