import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {setAuthUser} from '../actions/authUser'

function Nav() {
    const dispatch = useDispatch()
    let history = useHistory()
    const {name, avatarURL: avatar} = useSelector(state => state.users[state.authUser])
    const logout = () => {
        dispatch(setAuthUser(null))
        history.push("/")
    }
    return (
        <nav className="nav">
            <div className='nav-list' >
                <NavLink to="/" className='nav-list-button' activeClassName='nav-list-active' exact>
                    Home
                </NavLink>
                <NavLink to="/add"  className='nav-list-button' activeClassName='nav-list-active' exact>
                    New Question
                </NavLink>
                <NavLink to="/leaderboard" className='nav-list-button' activeClassName='nav-list-active' exact>
                    Leaderboard
                </NavLink>
            </div>
            <div className='nav-list' >
                <div className='nav-list-item' >
                    {name}
                    <img src={avatar} alt="Avatar" className="avatar"/>
                </div>
                <div className='nav-list-button' onClick={logout}>Logout</div>
            </div>
        </nav>
    )
}

export default Nav
