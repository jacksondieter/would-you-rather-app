import React from 'react'
import useBoards from './useBoards'


function Questions() {
    const {listAnswered, listUnanswered} = useBoards()
    console.log(listAnswered);
    console.log(listUnanswered);
    return (
        <div>
            Questions
        </div>
    )
}

export default Questions
