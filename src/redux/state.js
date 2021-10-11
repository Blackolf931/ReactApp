let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world', countsLike: 2},
                {id: 2, message: 'Hi, how are you?', countsLike: 13},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hi'},
            ],
            dialogs: [
                {id: 1, name: 'Matvey'},
                {id: 2, name: 'Alexandra'},
                {id: 3, name: 'Ilia'},
                {id: 4, name: 'Viktoria'}],
            newMessage: ''
        },
        officePage: {
            officeInformation: [
                {id: 1, address: 'Mogilev', officeName: 'MyOffice', country: 'Belarus'},
                {id: 1, address: 'Mogilev', officeName: 'MyOffice', country: 'Belarus'},
            ],
        },
    },
    _callSubscriber() {
        console.log('rerender');
    },
    getState() {
        return this._state
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessage
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessage = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText) {
        this._state.messagesPage.newMessage = newMessageText
        this._callSubscriber(this._state)
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            countsLike: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}
export default store;
