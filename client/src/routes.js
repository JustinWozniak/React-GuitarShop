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
import ManageCategories from './components/User/Admin/manage_categories';
import ProductPage from './components/Product/Product.Component';
import UserCart from './components/User/Cart.Component';
import UpdateProfile from './components/User/UpdateProfile.Component';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        {/* //Admin Routes */}
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>
        <Route path="/user/cart" exact component={Auth(UserCart,true)}/>
        <Route path="/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>
        <Route path="/user/user_profile" exact component={Auth(UpdateProfile,true)}/>



        {/* //public routes */}
        <Route path="/product_detail/:id" exact component={Auth(ProductPage,null)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}
export default Routes;
