import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import UserCard from './UserCard'

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
        <div className="card-box">
            <UserCard author = {author} avatar={avatar}/>
            <div className="card-left">
                <div className="card-element">{`Would your rather ${text} or ...`}</div>
            </div>
        </div>
        </Link>
    )
}
