import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/layout'
import Home from './components/Home/Home.Component'
import RegisterLogin from './components/Register_Login/Register_Login.Component'
import Register from './components/Register_Login/Register.Component'
import UserDashboard from './components/User/User.Component'
import Auth from './hoc/auth'
import Shop from './components/Shop/Shop.Component';
import AddProduct from './components/User/Admin/add_product';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        {/* //Admin Routes */}
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>


        {/* //public routes */}
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}
export default Routes;
