import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Adminstore from './Components/AdminStore/adminstore';
import Login from './Components/Login/login';
import Order from './Components/SalesOrder/order';

const App = () => {
  return ( <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/adminstore" component={Adminstore}/>
    <Route path="/salesorder" component={Order}/>
  </Switch>
  </BrowserRouter> );
}
 
export default App;