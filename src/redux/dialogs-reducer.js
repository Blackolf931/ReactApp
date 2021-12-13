const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi'},
    ],
    dialogs: [
        {id: 1, name: 'Matvey'},
        {id: 2, name: 'Alexandra'},
        {id: 3, name: 'Ilia'},
        {id: 4, name: 'Viktoria'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 5, message: body}],

            };
        default:
            return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
