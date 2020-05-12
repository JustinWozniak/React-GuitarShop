import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/layout'
import Home from './components/Home/Home.Component'
import RegisterLogin from './components/Register_Login/Register_Login.Component'
import Register from './components/Register_Login/Register.Component'


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}
export default Routes;
