import React from 'react'
import useBoards from './useBoards'
import QuestionCard from './QuestionCard'
import Tabs from './Tabs';


function Dashboard() {
    const {answeredQuestions, unansweredQuestions} = useBoards()
    return (
        <div className='board-container'>
            <Tabs>
                <div label='Unanswered Question'>
                    {unansweredQuestions.map((key) => (
                    <QuestionCard key={key} id={key}/>
                    ))}
                </div>
                <div label='Answered Questions'>
                    {answeredQuestions.map((key) => (
                    <QuestionCard key={key} id={key}/>
                    ))}
                </div>
            </Tabs>
        </div>
    )
}

export default Dashboard
