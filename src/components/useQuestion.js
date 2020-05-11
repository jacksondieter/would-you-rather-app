import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {handleAnswerQuestion} from '../actions/shared'

export default function useQuestion(qid) {
    const {users, question, authUser} = useSelector((state) => {
        const users = state.users
        const question = state.questions[qid]
        const authUser = state.authUser
        return{
            users,
            question,
            authUser
        }
    })
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState('')
    if(!users || !question || !authUser) return {loading:true}
    
    const author = users[question.author].name
    const answered = Object.keys(users[authUser].answers).includes(qid)
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
            dispatch(handleAnswerQuestion(authUser, qid, answer))
        }
        console.log(answer);
    }
    return {
            author,
            optionOne,
            optionTwo,
            answered,
            handleSubmit,
            handleSelection
        }
    }

