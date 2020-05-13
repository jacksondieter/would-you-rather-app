import React from 'react'

export default function UserCard({author, avatar}) {
    return (
        <div className="card-right">
            <div className="card-element"><img src={avatar} alt="Avatar" className="author"/></div>
            <h3 className="card-element">{author}</h3>
        </div>
    )
}
