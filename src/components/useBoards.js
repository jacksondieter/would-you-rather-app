import {useSelector} from 'react-redux'

export default function useBoards(){
    const {users,questions,authUser} = useSelector((state) => {
        return {
                users:state.users,
                questions:state.questions,
                authUser:state.authUser
                };
    })
    const answeredQuestions = Object.keys(users[authUser].answers)
                                .sort((a,b) => questions[a].timestamp - questions[b].timestamp)
    const unansweredQuestions = Object.keys(questions)
                                .filter((key) => !answeredQuestions.includes(key))
                                .sort((a,b) => questions[a].timestamp - questions[b].timestamp)

    const leaderBoardUsers = Object.keys(users)
                            .map((key) => {
                                const answers =  Object.keys(users[key].answers).length
                                const questions = users[key].questions.length
                                return{
                                    id:key,
                                    author: users[key].name,
                                    avatar:users[key].avatarURL,
                                    score: answers + questions,
                                    answers,
                                    questions
                                    }
                                })
                            .sort((a,b) => b.score - a.score)

    return {leaderBoardUsers, answeredQuestions, unansweredQuestions}
}