import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/layout'
import Home from './components/Home/Home.Component'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}
export default Routes;
