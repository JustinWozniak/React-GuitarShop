import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/layout'
import Home from './components/Home/Home.Component'
import RegisterLogin from './components/Register_Login/Register_Login.Component'
import Register from './components/Register_Login/Register.Component'
import UserDashboard from './components/User/User.Component'
import Auth from './hoc/auth'


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />

        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}
export default Routes;
