import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './../style/index.css';
const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
// const PaperExampleSimple = (props) => (
const PaperExampleSimple = (props) => (
<MuiThemeProvider>
  <div className="parentPapper">
{props.c.map((object) =>(

  <Paper id={object.id} key={object.id} className={(parseInt(object.id)%3)?" ":"row"} style={style} zDepth={3} />
))}
    </div>
</MuiThemeProvider>
);

export default PaperExampleSimple;
