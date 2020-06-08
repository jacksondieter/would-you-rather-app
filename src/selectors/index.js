/* https://redux.js.org/recipes/computing-derived-data
Reselect['https://github.com/reduxjs/reselect'] is 
a simple library for creating memoized,composable 
selector functions. Reselect selectorscan be used 
to efficiently compute derived data from the Redux store. */

import { createSelector } from 'reselect'

const getQuestions = state => state.questions
const getUsers = state => state.users
const getAuthUser = state => state.authUser

export const getAnsweredQuestions = createSelector(
    [getUsers,getQuestions,getAuthUser],
    (users, questions,authUser) => (
        Object.keys(users[authUser].answers)
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    )
)

export const getUnansweredQuestions = createSelector(
    [getAnsweredQuestions,getQuestions],
    (answeredQuestions, questions) => (
        Object.keys(questions)
                .filter((key) => !answeredQuestions.includes(key))
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    )
)

export const getLeaderBoardUsers = createSelector(
    [getUsers,getQuestions],
    (users, questions) => (
        Object.keys(users)
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
    )
)


