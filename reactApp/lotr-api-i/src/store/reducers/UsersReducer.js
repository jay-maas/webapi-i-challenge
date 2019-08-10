import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    HANDLE_CHANGES
} from '../constants'

const initialState = {
    inputValue: [
        {
            name: '',
            bio: ''
        }
    ],
    users: [],
    user: [],
    message: '',
    error: ''
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case ADD_USER:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                message: action.payload
            }
        case HANDLE_CHANGES:
            return {
                ...state,
                inputValue: [
                    {
                        name: action.payload.name,
                        bio: action.payload.bio
                    }
                ]
            }
        default:
            return state
    }
}