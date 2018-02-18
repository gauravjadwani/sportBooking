import React, { Component } from 'react';
import Header from './components/common/Header.js';

class App extends Component {
  constructor (props) {
         super(props);
       }
  render() {
      console.log('App');
    return (
      <div >
     <Header/>
     {this.props.children}
   </div>
    );
  }
}
export default App;
