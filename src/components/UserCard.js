import React from 'react'

export default function UserCard({name, answers, score, questions, avatar}) {
    return (
        <div>
            <h3>{name}</h3>
            <div>{avatar}</div>
            <div>Answers : {answers}</div>
            <div>Questions : {questions}</div>
            <div>Score : {score}</div>
        </div>
    )
}
