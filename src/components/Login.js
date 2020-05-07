import React, {useState} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {setAuthUser} from '../actions/authUser'

function Login() {
    const users = useSelector(state => state.users)
    const userslist = Object.keys(users)
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setAuthUser(user))
    }
    const handleSelection = (e) => {
        setUser(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select id="users" name="users" onChange={handleSelection}>
                    {userslist.map((key) => (
                        <option key={key} value={key}>{users[key].name}</option>
                    )
                    )}
                </select>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
