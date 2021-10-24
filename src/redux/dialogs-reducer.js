const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessageText:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text) =>
    ({type: updateNewMessageText, body: text})