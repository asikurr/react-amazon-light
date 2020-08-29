import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <div >
      <Header />
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
