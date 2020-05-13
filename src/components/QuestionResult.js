import React from 'react'
import useQuestion from './useQuestion'

function QuestionResult({id}) {
    const {
        optionOne,
        optionTwo
    } = useQuestion(id)
    return (
        <div className="card-right">
            <div className={optionOne.answer}>
                <div className="question-result-element">{optionOne.text}</div>
                <div className="bar-result-container">
                    <div style={{width:`${optionOne.percent}%`}} className="bar-result">{`${optionOne.percent}%`}</div>
                </div>
                <div className="question-result-element">
                {`${optionOne.votes} out of ${optionOne.total} votes`}
                </div>
            </div>
            <div className={optionTwo.answer}>
                <div className="question-result-element">{optionTwo.text}</div>
                <div className="bar-result-container ">
                    <div style={{width:`${optionTwo.percent}%`}} className="bar-result">{`${optionTwo.percent}%`}</div>
                </div>
                <div className="question-result-element">
                {`${optionTwo.votes} out of ${optionTwo.total} votes`}
                </div>
            </div>
        </div>
    )
}

export default QuestionResult
