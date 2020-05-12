import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {handleAnswerQuestion} from '../actions/shared'

export default function useQuestion(id) {
    const {question, authUser} = useSelector((state) => {
        const question = state.questions[id]
        const authUser = state.authUser
        return{
            question,
            authUser
        }
    })
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState('')

    const optionValues = (option,option2) => {
        const text =  option.text
        const votes = option.votes.length
        const answer = option.votes.includes(authUser)
        const total =  votes + option2.votes.length
        const percent = Number.parseInt(votes/total*100,10);
        return {
            text,
            votes,
            answer,
            total,
            percent
        }
    }
    const optionOne = optionValues(question.optionOne, question.optionTwo)
    const optionTwo = optionValues(question.optionTwo, question.optionOne)

    const handleSelection =  (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(answer!==''){
            dispatch(handleAnswerQuestion(authUser, id, answer))
        }
        console.log(answer);
    }


    return {
            optionOne,
            optionTwo,
            handleSubmit,
            handleSelection,
        }
    }

