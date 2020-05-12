import React from 'react'
import useQuestionPage from './useQuestionPage'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'


function QuestionPage() {
    const {
            id,
            author,
            avatar,
            answered,
            handleClose
        } = useQuestionPage()
    console.log(avatar);
    return (
        <div className='card-container'>
            <div className="button" onClick={handleClose}>Close</div>
            <div>
            <h4>{author}</h4>
            <div>{avatar}</div>
            </div>
            {answered?(
                <QuestionResult id={id}/>
            ):(
                <QuestionPoll id={id}/>
            )}
        </div>
    )
}

export default QuestionPage
