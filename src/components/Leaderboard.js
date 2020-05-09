import React from 'react'
import useBoards from './useBoards'
import User from './User'

function Leaderboard() {
    const {leaderBoardUsers} = useBoards()
    return (
        <div>
            <h2>Leaderboard</h2>
            {leaderBoardUsers
            .map((user) => (<User key={user.id} {...user}/>)
            )}
        </div>
    )
}

export default Leaderboard
