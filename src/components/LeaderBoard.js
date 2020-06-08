import React from 'react'
import {useSelector} from 'react-redux'
import {getLeaderBoardUsers} from '../selectors'
import UserBoardCard from './UserBoardCard'

export default function LeaderBoard() {
    const {leaderBoardUsers} = useSelector((state) => {
        return {
                leaderBoardUsers: getLeaderBoardUsers(state)
                };
    })
    return (
        <div className='board-container'>
            {leaderBoardUsers
            .map((user) => (<UserBoardCard key={user.id} {...user}/>)
            )}
        </div>
    )
}
