import React from 'react'
import useQuestion from './useQuestion'

function QuestionPage({id}) {
    const data = useQuestion(id)
    if (data.loading) return(
        <div>loading</div>
        )
    const {author, answered, optionOne, optionTwo, handleSubmit, handleSelection} = data
    return (
        <div>
            <h3>QuestionPage</h3>
            <h4>{author}</h4>
            {answered?(
                <div>
                <div className={(optionOne.answer?'Question-result':'')}>
                    <div>
                    {optionOne.text}
                    </div>
                    {`${optionOne.votes} out of ${optionOne.total} votes`}
                </div>
                <div className={(optionTwo.answer?'Question-result':'')}>
                <div>
                    {optionTwo.text}
                    </div>
                    {`${optionTwo.votes} out of ${optionTwo.total} votes`}
                    </div>
                </div>
            ):(
            <form onSubmit={handleSubmit}>
                <input type="radio" id="optionOne" name="question" value="optionOne" onClick={handleSelection}/>
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input type="radio" id="optionTwo" name="question" value="optionTwo" onClick={handleSelection}/>
                <label htmlFor="optionTwo">{optionTwo.text}</label>
                <input type="submit" value="Submit"/>
            </form>
            )}
        </div>
    )
}

export default QuestionPage
