import { RECEIVE_USERS, ANSWER_USER, ADD_QUESTION_USER } from '../actions/users'

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            }
        case ANSWER_USER:
            const {authUser,qid,answer} = action;
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_QUESTION_USER:
            const {formattedQuestion, author} = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([formattedQuestion.id])
                }}
        default :
            return state
    }
}