import React, { Component } from 'react';
import Header from './components/common/Header.js';

class App extends Component {
  constructor (props) {
         super(props);
console.log(this.props,'dw');
       }
  render() {
      console.log('App');
    return (
      <div className="container-fluid">
     <Header/>
     {this.props.children}
   </div>
    );
  }
}
export default App;
