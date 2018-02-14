import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
// import Header from './components/common/Header';
import Signup from './components/Signup';
import LandingScreen from './components/LandingScreen';
import PaperComponent from './components/PaperComponent';
import Details from './components/Details';



// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
// import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
  <Route path="Signup" component={Signup}/>
    <IndexRoute component={LandingScreen}/>
    <Route path='/details' component={Details}/>

  </Route>
);
