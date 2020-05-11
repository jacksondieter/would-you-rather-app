import { receiveUsers, answerUser } from './users';
import { receiveQuestions, answerQuestion } from './questions';
import { getInitialData, saveQuestionAnswer } from '../utils/api';

export function handleInitialData () {
    return (dispatch) => {
        // dispatch loading
        return getInitialData()
            .then(({ users, questions }) => {
                // dispatch end of loading
                //console.log(users)
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleAnswerQuestion(authUser, qid, answer) {
    return (dispatch) => {
        dispatch(answerUser(authUser,qid,answer));
        dispatch(answerQuestion(authUser,qid,answer));

        return saveQuestionAnswer({authUser, qid, answer})
                .catch((e) => {
                    console.console.warn('error with saveQuestionAnswer: ',e);
                })
    }
}