import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
// import Header from './components/common/Header';
import Signup from './components/Signup';
import S from './components/s';



// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
// import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
  <Route path="Signup" component={Signup}/>
    <IndexRoute component={S}/>

  </Route>
);
