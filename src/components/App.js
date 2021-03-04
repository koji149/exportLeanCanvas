import React, {useEffect, useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Page404 from '../pages/Page404'

import reducer from "../reducers/index"
import AppContext from "../contexts/AppContext"

const useStyles = makeStyles({
  root: {
    width: "100%",
    flex: 1,
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 25,
    boxSizing: 'border-box'
  },
});

const APP_KEY = 'appWithRedux'

const App = () => {
  const classes = useStyles();
  const appState = sessionStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    contens: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    sessionStorage.setItem(APP_KEY, JSON.stringify(state) )
    },[state])
  return (
      <BrowserRouter>
        <AppContext.Provider value={{state, dispatch}}>
          <div className={classes.root}>
            <Header/>
              <Switch>
            <>
              <Route exact path="/">
                <Main />
              </Route>
              <Route component={Page404} />
            </>
              </Switch>
            <Footer/>
          </div>
        </AppContext.Provider>
      </BrowserRouter>

  );
}

export default App;