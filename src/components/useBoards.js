import {useSelector} from 'react-redux'

export default function useBoards(){
    const {users,questions,authUser} = useSelector((state) => {
        return {
                users:state.users,
                questions:state.questions,
                authUser:state.authUser
                };
    })

    const answeredQuestions = !authUser
                                ?[]
                                :Object.keys(users[authUser].answers)
                                .sort((a,b) => questions[a].timestamp - questions[b].timestamp)
    const unansweredQuestions = !authUser
                                ?[]
                                : Object.keys(questions)
                                .sort((a,b) => questions[a].timestamp - questions[b].timestamp)
                                .filter((key) => !answeredQuestions.includes(key))
    const leaderBoardUsers = Object.keys(users)
                            .map((key) => {
                                const answers =  Object.keys(users[key].answers).length
                                const questions = users[key].questions.length
                                return{
                                    id:key,
                                    name: users[key].name,
                                    score: answers + questions,
                                    answers,
                                    questions
                                    }
                                })
                            .sort((a,b) => b.total - a.total)

    return {leaderBoardUsers, answeredQuestions, unansweredQuestions}
}