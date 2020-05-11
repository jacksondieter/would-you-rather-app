import {useSelector} from 'react-redux'

export default function useQuestion(id) {
    const {users, question, authUser} = useSelector((state) => {
        const users = state.users
        const question = state.questions[id]
        const authUser = state.authUser
        return{
            users,
            question,
            authUser
        }
    })
    if(!users || !question || !authUser) return {loading:true}
    const author = users[question.author].name
    const answered = Object.keys(users[authUser].answers).includes(id)
    const optionOne =   {
                            text: question.optionOne.text,
                            votes:question.optionOne.votes.length,
                            answer:question.optionOne.votes.includes(authUser)
                        }
    const optionTwo =   {
                            text: question.optionTwo.text,
                            votes:question.optionTwo.votes.length,
                            answer:question.optionTwo.votes.includes(authUser)
                        }
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
    }
    return {
            author,
            optionOne,
            optionTwo,
            answered,
            totalVotes,
            handleSubmit
        }
    }

