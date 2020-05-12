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
        <div>
            <button onClick={handleClose}>Close</button>
            <h3>QuestionPage</h3>
            <h4>{author}</h4>
            <div>{avatar}</div>
            {answered?(
                <QuestionResult id={id}/>
            ):(
                <QuestionPoll id={id}/>
            )}
        </div>
    )
}

export default QuestionPage
