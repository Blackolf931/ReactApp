import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world', countsLike: 2},
            {id: 2, message: 'Hi, how are you?', countsLike: 13},
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hi'}
        ],
        dialogs: [
            {id: 1, name: 'Matvey'},
            {id: 2, name: 'Alexandra'},
            {id: 3, name: 'Ilia'},
            {id: 4, name: 'Viktoria'}]
    },
    officePage: {
        officeInformation: [
            {id: 1, address: 'Mogilev', officeName: 'MyOffice', country: 'Belarus'},
            {id: 1, address: 'Mogilev', officeName: 'MyOffice', country: 'Belarus'},
        ],
    },
}
export default state

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        countsLike: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireThree(state)
}