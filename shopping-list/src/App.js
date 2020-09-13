import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.js';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CreateProduct from './components/create-product.component.js';
import EditProduct from './components/edit-product.component.js';
import ListProduct from './components/list-product.component.js';

class App extends Component{
  render(){
    return(
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand"> React product app by Sudheera</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={'/'} className="nav-link">Create Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/edit-product/:id'} className="nav-link">Edit Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/list-product'} className="nav-link">product List</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <br/>
              <h2>Welcome Cargils Foodcity</h2>
              <Switch>
                <Route exact path="/" component = {CreateProduct}/>
                <Route exact path="/create-product" component = {CreateProduct}/>
                <Route exact path="/edit-product/:id" component = {EditProduct}/>
                <Route exact path="/list-product" component = {ListProduct}/>
              </Switch>
            </div>
          </Router>
    );
  }
}
export default App;
