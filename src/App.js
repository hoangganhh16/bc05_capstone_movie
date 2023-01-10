import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import React, { useEffect } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import { useMediaQuery } from 'react-responsive';


export const history = createBrowserHistory();
function App() {
  
  return (
    <>
   
        <Router history={history}>
          <Loading />
          <Switch>
            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/detail/:id" exact Component={Detail} />
            <UserTemplate path="/login" exact Component={Login} />
            <UserTemplate path="/register" exact Component={Register} />
            <HomeTemplate path="/" exact Component={Home} />
          </Switch>
        </Router>


    </>

  );
}

export default App;
