import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

export const UserContext = createContext()
function App() {
  const [loggedInUser , setLoggedInUser]= useState({}) 
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router> 
      <Switch>
          <Route path='/home'>
              <Banner></Banner>
          </Route>
          <Route path='/news'>
              <Banner></Banner>
          </Route>
          <Route path='/booking/:Id'>
              <Booking></Booking>
          </Route>
          <PrivateRoute path='/destination'>
              <Destination/>
          </PrivateRoute>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path='/blog'>
              <Blog/>
          </Route>
          <Route path='/contact'>
              <Contact/>
          </Route>
          <Route exact path='/'>
              <Banner></Banner>
          </Route>
          <Route  path='*'>
              <NotFound/>
          </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
