import { ADD_POST, REMOVE_POST } from '../constans/posts'

let obj = require('../json/posts.json');

let PostId = obj.length + 1;

export const addPost = (title, body, tags) => ({
    type: ADD_POST,
    id: PostId++,
    title,
    body,
    tags
})

export const deletePost = (id) => ({
    type: REMOVE_POST,
    id: id
})