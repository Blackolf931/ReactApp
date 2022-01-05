import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, message: 'Hello world', countsLike: 2},
        {id: 2, message: 'Hi, how are you?', countsLike: 13},
    ]
}
test('new post should be added', () => {
    //1. test data
    let action = addPostActionCreator("Test-post");
    //2 action
    let newState = profileReducer(state,action);

    //3 expectation
   expect(newState.posts.length).toBe(3);

});
test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("Test-post");

    //2 action
    let newState = profileReducer(state,action);

    //3 expectation
   expect(newState.posts[2].message).toBe("Test-post");

});

test('after delete length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2 action
    let newState = profileReducer(state,action);

    //3 expectation
   expect(newState.posts.length).toBe(1);

});
test('after delete length of messages should not be changed if id is not correct', () => {
    //1. test data
    let action = deletePost(4);

    //2 action
    let newState = profileReducer(state,action);

    //3 expectation
   expect(newState.posts.length).toBe(2);

});

