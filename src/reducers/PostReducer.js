import { ADD_POST, REMOVE_POST } from '../constans/posts'

const INITIAL_DATA = require('../json/posts.json');

const PostReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_POST:
            return [
                ...state,{
                    id: action.id,
                    title: action.title,
                    body: action.body,
                    tags: action.tags,
                    completed: false
                }
            ]

        case REMOVE_POST:
            const numIndex = parseInt(action.id)
            return state.filter(post => post.id !== numIndex);
            default:
            return state
    }
}

export default PostReducer