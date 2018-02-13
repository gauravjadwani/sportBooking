import React from 'react';
import Paper from 'material-ui/Paper';

// import './css/svg.css';


class PaperComponent extends React.Component {

  let style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  };
  render() {
    console.log(style);
    return (
      <div>
   <Paper style={this.style} zDepth={1} />
   <Paper style={this.style} zDepth={2} />
   <Paper style={this.style} zDepth={3} />
   <Paper style={this.style} zDepth={4} />
   <Paper style={this.style} zDepth={5} />
 </div>
  );
  }
}
export default PaperComponent;
