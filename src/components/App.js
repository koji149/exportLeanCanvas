import React, {useEffect, useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    contens: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state) )
    },[state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className={classes.root}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;