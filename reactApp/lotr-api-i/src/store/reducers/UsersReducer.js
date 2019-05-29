import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from '../constants'

const initialState = {
    inputValue: [
        {
            name: '',
            bio: ''
        }
    ],
    users: [],
    user: []
}

export const usersReducer =  (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                inputValue: [
                    {
                        name: '',
                        bio: ''
                    }
                ],
                user: []
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                inputValue: [
                    {
                        name: '',
                        bio: ''
                    }
                ],
            }
        case ADD_USER:
            return {
                ...state,
                inputValue: [
                    {
                        name: action.payload.name,
                        bio: action.payload.bio
                    }
                ]
            }
        case UPDATE_USER:
            return {
                ...state,
                inputValue: [
                    {
                        name: action.payload.name,
                        bio: action.payload.bio
                    }
                ]
            }
        case DELETE_USER:
            return {
                ...state,
                inputValue: [
                    {
                        name: '',
                        bio: ''
                    }
                ]
            }
    }
}