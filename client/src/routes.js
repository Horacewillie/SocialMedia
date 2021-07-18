import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'



const Routes = () => {
  return(
    <Layout>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile/:username" exact component={Profile}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
      </Switch>
    </Layout>

  )
}

export default Routes;