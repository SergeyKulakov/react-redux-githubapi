import { ADD_AXIOS, REMOVE_AXIOS } from '../constans/axios'

const INITIAL_DATA = [];

const PostReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_AXIOS:
            return [
                ...state,{
                    id: action.id,
                    login: action.login,
                    avatar_url: action.avatar_url,
                    completed: false
                }
            ]

        case REMOVE_AXIOS:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
            default:
            return state
    }
}

export default PostReducer