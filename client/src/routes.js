import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Auth from './hoc/Auth/Auth'



const Routes = () => {
  return(
    <Layout>
      <Switch>
      <Route path="/" exact component={Auth(Home, true)}/>
      <Route path="/profile/:username" exact component={Auth(Profile, true)}/>
      <Route path="/login" exact component={Auth(Login, false)}/>
      <Route path="/register" exact component={Auth(Register, false)}/>
      </Switch>
    </Layout>

  )
}

export default Routes;