import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "ab2299f9-d637-4495-a1f1-917f06639414"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response=> response.data)
    }
}
