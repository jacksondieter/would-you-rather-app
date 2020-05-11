export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_USER = 'ANSWER_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function answerUser ( authUser, qid, answer ) {
    return {
        type: ANSWER_USER,
        authUser,
        qid,
        answer
    }
}