import React from 'react'
import {useSelector} from 'react-redux'

function Question({id, answered}) {
    const {author,text} = useSelector((state) => {
        const users = state.users
        const questions = state.questions
        return {
            author:users[questions[id].author].name,
            text: questions[id].optionOne.text
            }
    })
    return (
        <div>
            <h3>{author}</h3>
            <div>{`Would your rather ${text} or ...`}</div>
        </div>
    )
}

export default Question
