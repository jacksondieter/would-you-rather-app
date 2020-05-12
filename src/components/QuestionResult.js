import React from 'react'
import useQuestion from './useQuestion'

function QuestionResult({id}) {
    const {
        optionOne,
        optionTwo
    } = useQuestion(id)
    return (
        <div>
            <div className={optionOne.answer}>
                        <div>{optionOne.text}</div>
                        <div className="bar-result-container">
                            <div style={{width:`${optionOne.percent}%`}} className="bar-result">{`${optionOne.percent}%`}</div>
                        </div>
                        {`${optionOne.votes} out of ${optionOne.total} votes`}
                    </div>
                    <div className={optionTwo.answer}>
                        <div>{optionTwo.text}</div>
                        <div className="bar-result-container">
                            <div style={{width:`${optionTwo.percent}%`}} className="bar-result">{`${optionTwo.percent}%`}</div>
                        </div>
                        {`${optionTwo.votes} out of ${optionTwo.total} votes`}
                    </div>
        </div>
    )
}

export default QuestionResult
