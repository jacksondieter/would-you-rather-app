import React from 'react'
import {Redirect} from 'react-router-dom'
import useQuestionPage from '../hooks/useQuestionPage'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'
import UserCard from './UserCard'


function QuestionPage() {
    const data = useQuestionPage()
    if (data.status){
        return (<Redirect to="/page404" />)
    }
    const {
            id,
            author,
            avatar,
            answered,
            handleClose
        } = data
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
