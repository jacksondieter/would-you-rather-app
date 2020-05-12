import React from 'react'
import useBoards from './useBoards'
import UserCard from './UserCard'

function Leaderboard() {
    const {leaderBoardUsers} = useBoards()
    return (
        <div>
            <h2>Leaderboard</h2>
            {leaderBoardUsers
            .map((user) => (<UserCard key={user.id} {...user}/>)
            )}
        </div>
    )
}

export default Leaderboard
