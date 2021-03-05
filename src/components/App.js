import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Page404 from "../pages/Page404";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

import reducer from "../reducers/index";
import AppContext from "../contexts/AppContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

const APP_KEY = "appWithRedux";

const App = () => {
  const classes = useStyles();
  const appState = sessionStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        contens: [],
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    sessionStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className={classes.root}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/privacy-policy" exact>
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-of-service" exact>
              <TermsOfService />
            </Route>
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
