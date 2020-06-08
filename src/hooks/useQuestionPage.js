import {useSelector} from 'react-redux'
import { useParams, useHistory} from 'react-router-dom'

export default function useQuestionPage() {
    const { id } = useParams()
    let history = useHistory()
    const {users, questions, authUser} = useSelector((state) => {
        const users = state.users
        const questions = state.questions
        const authUser = state.authUser
        return{
            users,
            questions,
            authUser
        }
    })

    const question = questions[id]
    if(!question){
        return {status:'404'};
    }

    const answered = Object.keys(users[authUser].answers).includes(id)

    const author = users[question.author].name
    const avatar = users[question.author].avatarURL

    const handleClose = () => {
        history.push("/");
    }
    return {
            id,
            author,
            avatar,
            answered,
            handleClose
        }
    }
