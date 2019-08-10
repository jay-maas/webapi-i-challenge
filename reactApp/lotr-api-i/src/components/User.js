import React from 'react'
import { DELETE_USER } from '../store/constants';
import axios from 'axios'

const User = ({ user, dispatch }) => {
    const deleteUser = e => {
        e.preventDefault()
        axios
            .delete(`http://localhost:5000/api/users/${user.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        dispatch({
            type: DELETE_USER,
            payload: "User deleted."
        })
    }
    console.log(user)
    return (
        <div style={{width: '25%', height: '25%', margin: '2.5%', border: '1px solid black', padding: '2.5%', display: 'flex', flexDirection: 'column', textAlign: 'center'}}> 
            {user && 
            <>
                <p>Name: {user.name}</p>
                <p>Bio: {user.bio}</p>
                <button onClick={deleteUser}>Delete User</button>
            </>
            }
        </div>
    )
}

export default User