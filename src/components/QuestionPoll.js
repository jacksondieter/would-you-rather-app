import React from 'react'
import useQuestion from '../hooks/useQuestion'

function QuestionPoll({id}) {
    const {
        optionOne,
        optionTwo,
        handleSubmit,
        handleSelection,
    } = useQuestion(id)
    return (
            <form onSubmit={handleSubmit} className="card-right">
                <div className="card-element">
                    <h3>Would you rather ...</h3>
                </div>
                <div className="radio-element  question-option">
                    <input type="radio" id="optionOne" name="question" value="optionOne" onClick={handleSelection}/>
                    <label htmlFor="optionOne">{optionOne.text}</label>
                </div>
                <div className="radio-element question-option">
                    <input type="radio" id="optionTwo" name="question" value="optionTwo" onClick={handleSelection}/>
                    <label htmlFor="optionTwo">{optionTwo.text}</label>
                </div>
                <input type="submit" value="Submit" className="button submit-btn card-element"/>
            </form>
    )
}

export default QuestionPoll
