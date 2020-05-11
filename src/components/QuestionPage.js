import React from 'react'
import useQuestion from './useQuestion'

function QuestionPage({id}) {
    const data = useQuestion(id)
    if (data.loading) return(
        <div>loading</div>
        )
    const {author, answered, optionOne, optionTwo, totalVotes, handleSubmit} = data
    console.log(answered,optionOne, optionTwo,author, totalVotes);

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
                    {`${optionOne.votes} out of ${totalVotes} votes`}
                </div>
                <div className={(optionTwo.answer?'Question-result':'')}>
                <div>
                    {optionTwo.text}
                    </div>
                    {`${optionTwo.votes} out of ${totalVotes} votes`}
                    </div>
                </div>
            ):(
            <form onSubmit={handleSubmit}>
                <input type="radio" id="optionOne" name="question" value="optionOne"/>
                <label htmlFor="optionOne">{optionOne.text}</label>
                <input type="radio" id="optionTwo" name="question" value="optionTwo"/>
                <label htmlFor="optionTwo">{optionTwo.text}</label>
                <input type="submit" value="Submit"/>
            </form>
            )}
        </div>
    )
}

export default QuestionPage
