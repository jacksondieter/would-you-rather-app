import React from 'react'
import useQuestion from './useQuestion'

function QuestionPoll({id}) {
    const {
        optionOne,
        optionTwo,
        handleSubmit,
        handleSelection,
    } = useQuestion(id)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="radio" id="optionOne" name="question" value="optionOne" onClick={handleSelection}/>
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input type="radio" id="optionTwo" name="question" value="optionTwo" onClick={handleSelection}/>
                <label htmlFor="optionTwo">{optionTwo.text}</label>
                <input type="submit" value="Submit" className="button"/>
            </form>
        </div>
    )
}

export default QuestionPoll
