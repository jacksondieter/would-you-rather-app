import React from 'react'
import useBoards from './useBoards'
import UserBoardCard from './UserBoardCard'

export default function LeaderBoard() {
    const {leaderBoardUsers} = useBoards()
    return (
        <div className='board-container'>
            {leaderBoardUsers
            .map((user) => (<UserBoardCard key={user.id} {...user}/>)
            )}
        </div>
    )
}
