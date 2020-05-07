import React,{ useEffect } from 'react';
import { handleInitialData } from '../actions/shared'
import {connect, useDispatch} from 'react-redux'
import Login from './Login'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])
  return (
    <div className="App">
      <header>
        React
      </header>
      <Login/>
    </div>
  );
}

export default App;
