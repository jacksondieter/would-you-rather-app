import React,{ useEffect, useCallback } from 'react';
import { handleInitialData } from '../actions/shared'
import {useDispatch} from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Nav from './Nav'

function App() {
  const dispatch = useDispatch()
  const stableDispatch = useCallback(dispatch,[])
  useEffect(() => {
      stableDispatch(handleInitialData())
  },[stableDispatch])
  return (
    <div className="App">
      <header>
        Would you rather...?
      </header>
      <Nav/>
      <Login/>
      <Dashboard/>
      <QuestionPage id={'6ni6ok3ym7mf1p33lnez'}/>
      <LeaderBoard/>
      <NewQuestion />
    </div>
  );
}

export default App;
