import React from 'react'
import useQuestion from './useQuestion'

function QuestionPage({id}) {
    const data = useQuestion(id)
    if (data.loading) return(
        <div>loading</div>
        )
    const {author, answered, optionOne, optionTwo, totalVotes } = data
    console.log(answered,optionOne, optionTwo,author, totalVotes);

    return (
        <div>
            <h3>QuestionPage</h3>
            <h4>{author}</h4>
            {answered?(
                <div>
                <div className={(optionOne.answer?'Question-result':'')}>{optionOne.text}</div>
                <div className={(optionTwo.answer?'Question-result':'')}>{optionTwo.text}</div>
            </div>
            ):(
                <form>
                <input type="radio" id="optionOne" name="question" value="optionOne"/>
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input type="radio" id="optionTwo" name="question" value="optionTwo"/>
                <label htmlFor="optionTwo">{optionTwo.text}</label>
            </form>
            )}
        </div>
    )
}

export default QuestionPage
