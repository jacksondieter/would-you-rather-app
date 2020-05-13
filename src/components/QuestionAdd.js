import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { useHistory } from "react-router-dom";

export default function QuestionAdd() {
    const [optionOneText, setOptionOneText] = useState('')
    const [optionTwoText, setOptionTwoText] = useState('')
    let history = useHistory();
    const author = useSelector(state => state.authUser)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
                e.preventDefault()
                if (optionOneText !== '' && optionTwoText !== ''){
                    dispatch(handleAddQuestion(optionOneText,optionTwoText,author))
                    setOptionOneText('')
                    setOptionTwoText('')
                    history.push("/")
                }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="card-container">
                <h2>Create a new question</h2>
                <h3>Would you rather...</h3>
                <div>
                <input
                    type="text"
                    name="optionOne"
                    id="optionOne"
                    onChange={(e) => {setOptionOneText(e.target.value)}}
                    value={optionOneText}
                    className="option-input"/>
                <h3>OR</h3>
                <input
                    type="text"
                    name="optionTwo"
                    id="optionTwo"
                    onChange={(e) => {setOptionTwoText(e.target.value)}}
                    value={optionTwoText}
                    className="option-input"/>
                </div>
                <input type="submit" value="Submit" className='button submit-btn'/>
            </form>
        </div>
    )
}
