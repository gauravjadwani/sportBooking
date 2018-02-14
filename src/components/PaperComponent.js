import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './../style/index.css';
import {Link} from 'react-router';
const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
// const PaperExampleSimple = (props) => (
const Details = (props) => (
<div>
<img src={props.imgDetails.img} align="middle" height="200px" width="250px"/>
<div className="cardTitle"><b>{props.imgDetails.title}</b></div>
<div className="cardAddress"><b>{props.imgDetails.address}</b></div>
</div>
);
const PaperExampleSimple = (props) => (<MuiThemeProvider>
  <div className="parentPapper">
    {
      props.c.map((object) => (
        <Link to={'/Details?id='}>
        <Paper id={object.id} key={object.id} style={style} zDepth={3} children={<Details imgDetails={object}/>}/>
        </Link>
        )
        )
    }
  </div>
</MuiThemeProvider>);

export default PaperExampleSimple;
