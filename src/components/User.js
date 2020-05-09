import React from 'react'

function User({name,answers,score,questions}) {
    return (
        <div>
            <h3>{name}</h3>
            <div>Answers : {answers}</div>
            <div>Questions : {questions}</div>
            <div>Score : {score}</div>
        </div>
    )
}

export default User
