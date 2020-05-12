import React from 'react'
import useBoards from './useBoards'
import UserCard from './UserCard'

export default function LeaderBoard() {
    const {leaderBoardUsers} = useBoards()
    return (
        <div className='board-container'>
            {leaderBoardUsers
            .map((user) => (<UserCard key={user.id} {...user}/>)
            )}
        </div>
    )
}
