import React from 'react'
import {useSelector} from 'react-redux'
import {getAnsweredQuestions, getUnansweredQuestions} from '../selectors'
import QuestionCard from './QuestionCard'
import Tabs from './Tabs';


function Dashboard() {
    const {answeredQuestions, unansweredQuestions} = useSelector((state) => {
        return {
                answeredQuestions: getAnsweredQuestions(state),
                unansweredQuestions: getUnansweredQuestions(state)
                };
    })
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
