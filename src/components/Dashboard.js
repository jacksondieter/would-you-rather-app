import React from 'react'
import useBoards from './useBoards'
import Question from './Question'


function Dashboard() {
    const {answeredQuestions, unansweredQuestions} = useBoards()
    return (
        <div>
            <div>
                <h2>Answered Questions</h2>
                {answeredQuestions.map((key) => (
                <Question key={key} id={key}/>
                ))}
                </div>
                <div>
                <h2>Unanswered Question</h2>
                {unansweredQuestions.map((key) => (
                <Question key={key} id={key}/>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
