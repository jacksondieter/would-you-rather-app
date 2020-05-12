import {useSelector} from 'react-redux'
import { useParams, useHistory} from 'react-router-dom'

export default function useQuestionPage() {
    const { id } = useParams()
    let history = useHistory()
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

