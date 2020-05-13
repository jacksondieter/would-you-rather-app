import React from 'react'
import useQuestionPage from './useQuestionPage'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'
import UserCard from './UserCard'


function QuestionPage() {
    const {
            id,
            author,
            avatar,
            answered,
            handleClose
        } = useQuestionPage()
    return (
        <div className='card-container'>
            <div className="button close-btn" onClick={handleClose}>X</div>
            <div className="card-box">
                <UserCard author = {author} avatar={avatar}/>
                {answered?(
                    <QuestionResult id={id}/>
                ):(
                    <QuestionPoll id={id}/>
                )}
            </div>
        </div>
    )
}

export default QuestionPage
