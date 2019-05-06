import { ADD_AXIOS, REMOVE_AXIOS } from '../constans/axios'

export const addAxios = (id, login, avatar_url) => ({
    type: ADD_AXIOS,
    id: id,
    login,
    avatar_url
})

export const deleteAxios = (id) => ({
    type: REMOVE_AXIOS,
    id: id
})