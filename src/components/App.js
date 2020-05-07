import React,{ useEffect } from 'react';
import { handleInitialData } from '../actions/shared'
import {useDispatch} from 'react-redux'
import Login from './Login'
import Questions from './Questions'
import LeaderBoard from './Leaderboard'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(handleInitialData())
  },[])
  return (
    <div className="App">
      <header>
        React
      </header>
      <Login/>
      <Questions/>
      <LeaderBoard/>
    </div>
  );
}

export default App;
