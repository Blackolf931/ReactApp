export const required = value => {
    if (value) {
        return undefined;
    }
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => value => {
    debugger
    if (value.length > maxLength) {
        return `Max Length is ${maxLength} symbols`;
    }
    return undefined;
}

export const minLength2 = value => {
    if (value && value.length < 2) {
        return "Min Length is 2 symbols";
    }

    return undefined;
}