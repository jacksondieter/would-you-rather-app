import React,{ useEffect, useCallback, Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import LeaderBoard from './Leaderboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Nav from './Nav'

function App() {
  const dispatch = useDispatch()
  const authUser = useSelector(state => state.authUser)
  const stableDispatch = useCallback(dispatch,[])
  useEffect(() => {
      stableDispatch(handleInitialData())
  },[stableDispatch])
  return (
    <Router>
      <div className="App">
        <header>
          Would you rather...?
        </header>
        {!authUser
        ?(<Login/>
        ):(
        <Fragment>
          <Nav/>
            <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/new' component={NewQuestion}/>
              <Route path='/leaderBoard' component={LeaderBoard}/>
              <Route path='/question/:id' component={QuestionPage} />
            </Switch>
        </Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
