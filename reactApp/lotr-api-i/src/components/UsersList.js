import React, { useEffect } from 'react'
import { useStateValue } from 'react-conflux'
import { UsersListContext } from '../store/context'
import { GET_USERS } from '../store/constants';
import axios from 'axios'
import User from './User'

const UsersList = () => {
    const [state, dispatch] = useStateValue(UsersListContext)

    useEffect(() => {
           getUsersList()
    }, [])

    const getUsersList = () => {
        axios
            .get('http://localhost:5000/api/users')
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_USERS,
                    payload: res
                })
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    const { data } = state.users

    console.log(state)
    return (
        <>
            UsersList Route
            {data && data.map(user => {
                return <User key={user.id} user={user} dispatch={dispatch} />
            })}
        </>
    )
}

export default UsersList