import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function QuestionCard({id}) {
    const {author,text,avatar} = useSelector((state) => {
        const question = state.questions[id]
        const user = state.users[question.author]
        return {
            author:user.name,
            avatar:user.avatarURL,
            text: question.optionOne.text
            }
    })
    return (
        <Link to={`/question/${id}`}>
        <div>
            <h3>{author}</h3>
            <div>{avatar}</div>
            <div>{`Would your rather ${text} or ...`}</div>
        </div>
        </Link>
    )
}
