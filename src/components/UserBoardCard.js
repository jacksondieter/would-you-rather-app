import React from 'react'
import UserCard from './UserCard'

export default function UserBoardCard({author, answers, score, questions, avatar}) {
    return (
        <div className="card-box">
            <UserCard author = {author} avatar={avatar}/>
            <div className="card-right">
                <div className="card-element">Answers : {answers}</div>
                <div className="card-element">Questions : {questions}</div>
                <div className="card-element">Score : {score}</div>
            </div>
        </div>
    )
}
