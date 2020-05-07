import React from 'react'
import useBoards from './useBoards'

function Leaderboard() {
    const {leaderBoardUsers} = useBoards()
    console.log(leaderBoardUsers);
    return (
        <div>
            Leaderboard
        </div>
    )
}

export default Leaderboard
