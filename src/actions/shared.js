import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { getInitialData } from '../utils/api';

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