import dialogsReducer, {deleteMessage, sendMessageCreator} from "./dialogs-reducer";

let state = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi'},
    ]
}

test('new message should be added', () => {
    //1. test data
    let action = sendMessageCreator("Hi how are you");
    //2 action
    let newState = dialogsReducer(state,action);

    //3 expectation
    expect(newState.messages.length).toBe(4);
});

test('message should be delete if id is correct', () => {
    //1. test data
    let action = deleteMessage(2);
    //2 action
    let newState = dialogsReducer(state,action);

    //3 expectation
    expect(newState.messages.length).toBe(2);

});
test('message should not be delete if id is not correct', () => {
    //1. test data
    let action = deleteMessage(9);
    //2 action
    let newState = dialogsReducer(state,action);

    //3 expectation
    expect(newState.messages.length).toBe(3);

});

