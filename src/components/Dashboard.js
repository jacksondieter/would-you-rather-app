import React from 'react'
import useBoards from './useBoards'
import QuestionCard from './QuestionCard'
import Tabs from './Tabs';


function Dashboard() {
    const {answeredQuestions, unansweredQuestions} = useBoards()
    return (
        <div>
            <Tabs>
                <div label='Unanswered Question'>
                    <h2>Unanswered Question</h2>
                    {unansweredQuestions.map((key) => (
                    <QuestionCard key={key} id={key}/>
                    ))}
                </div>
                <div label='Answered Questions'>
                    <h2>Answered Questions</h2>
                    {answeredQuestions.map((key) => (
                    <QuestionCard key={key} id={key}/>
                    ))}
                </div>
            </Tabs>
        </div>
    )
}

export default Dashboard
