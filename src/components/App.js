import React,{ useEffect, useCallback } from 'react';
import { handleInitialData } from '../actions/shared'
import {useDispatch} from 'react-redux'
import Login from './Login'
import Questionboard from './Questionboard'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'

function App() {
  const dispatch = useDispatch()
  const stableDispatch = useCallback(dispatch,[])
  useEffect(() => {
      stableDispatch(handleInitialData())
  },[stableDispatch])
  return (
    <div className="App">
      <header>
        React
      </header>
      <Login/>
      <Questionboard/>
      <QuestionPage id={'6ni6ok3ym7mf1p33lnez'}/>
      <LeaderBoard/>
    </div>
  );
}

export default App;
