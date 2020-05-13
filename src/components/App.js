import React,{ useEffect, useCallback, Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import QuestionAdd from './QuestionAdd'
import Nav from './Nav'
import Page404 from './Page404';

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
          <h1 className="title">Would you rather...?</h1>
        </header>
        {!authUser
        ?(<Login/>
        ):(
        <Fragment>
          <Nav/>
            <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/add' component={QuestionAdd}/>
              <Route path='/leaderBoard' component={LeaderBoard}/>
              <Route path='/question/:id' component={QuestionPage}/>
              <Route path='/page404' exact component={Page404}/>
            </Switch>
        </Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
