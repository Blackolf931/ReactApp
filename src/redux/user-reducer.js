const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
      /*  {
            id: 1,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: true,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 2,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: false,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 3,
            photoURL : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            followed: true,
            fullName: "Denis",
            status: "Developer",
            location: {city: "Mogilev", country: "Belarus"}
        },*/
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS : {
            return {...state, users: [...state.users, action.users]}
        }
        default :
            return state;
    }
}
export default userReducer;

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
            users
    }
}