import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

function NewQuestion() {
    const [optionOneText, setOptionOneText] = useState('')
    const [optionTwoText, setOptionTwoText] = useState('')
    const author = useSelector(state => state.authUser)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
                e.preventDefault()
                if (optionOneText !== '' && optionTwoText !== ''){
                    dispatch(handleAddQuestion(optionOneText,optionTwoText,author))
                    setOptionOneText('')
                    setOptionTwoText('')
                }
    }
    return (
        <div>
            <h2>Create a new question</h2>
            <form onSubmit={handleSubmit}>
                <div>Would you rather...</div>
                <div>
                <input
                    type="text"
                    name="optionOne"
                    id="optionOne"
                    onChange={(e) => {setOptionOneText(e.target.value)}}
                    value={optionOneText}/>
                <div>OR</div>
                <input
                    type="text"
                    name="optionTwo"
                    id="optionTwo"
                    onChange={(e) => {setOptionTwoText(e.target.value)}}
                    value={optionTwoText}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default NewQuestion
