import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {setAuthUser} from '../actions/authUser'

function Nav() {
    const dispatch = useDispatch()
    let history = useHistory()
    const username = useSelector(state => state.users[state.authUser].name)
    const logout = () => {
        dispatch(setAuthUser(null))
        history.push("/")
    }
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new">
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard">
                        Leaderboard
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>{username}</li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
