import React from 'react'
import useQuestion from './useQuestion'


function QuestionPage() {
    const data = useQuestion()
    if (data.loading) return(
        <div>Loading</div>
        )
    const {
            author,
            answered,
            optionOne,
            optionTwo,
            handleSubmit,
            handleSelection,
            handleClose
        } = data
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
                        <div className="bar-result-container">
                            <div style={{width:`${optionOne.percent}%`}} className="bar-result">{`${optionOne.percent}%`}</div>
                        </div>
                        {`${optionOne.votes} out of ${optionOne.total} votes`}
                    </div>
                    <div className={(optionTwo.answer?'Question-result':'')}>
                        <div>
                            {optionTwo.text}
                        </div>
                        <div className="bar-result-container">
                            <div style={{width:`${optionTwo.percent}%`}} className="bar-result">{`${optionTwo.percent}%`}</div>
                        </div>
                        {`${optionTwo.votes} out of ${optionTwo.total} votes`}
                    </div>
                    <button onClick={handleClose}>Close</button>
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
