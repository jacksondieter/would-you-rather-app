export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion ( authUser, qid, answer ) {
    return {
        type: ANSWER_QUESTION,
        authUser,
        qid,
        answer
    }
}

export function addQuestion ( formattedQuestion ) {
    return {
        type: ADD_QUESTION,
        formattedQuestion
    }
}