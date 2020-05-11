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
    const optionOne =   {
                            text: question.optionOne.text,
                            votes:question.optionOne.votes.length,
                            answer:question.optionOne.votes.includes(authUser),
                            total: question.optionOne.votes.length + question.optionTwo.votes.length
                        }
    const optionTwo =   {
                            text: question.optionTwo.text,
                            votes:question.optionTwo.votes.length,
                            answer:question.optionTwo.votes.includes(authUser),
                            total: question.optionOne.votes.length + question.optionTwo.votes.length
                        }

    const handleSelection =  (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAnswerQuestion(authUser, qid, answer))
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

