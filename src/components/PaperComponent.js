import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './../style/index.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import CustomModal from './common/Modal';
// import {Link} from 'react-router';
const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
// const PaperExampleSimple = (props) => (
const Details = (props) => (<div>
  <img src={props.imgDetails.mainImg} align="middle" height="200px" width="250px"/>
  <div className="cardTitle">
    <b>{props.imgDetails.title}</b>
  </div>
  <div className="cardAddress">
    <b>{props.imgDetails.address}</b>
  </div>

  {
    [1, 2, 3, 4, 5].map(function() {
      return <span className={(
          parseInt(props.r))
          ? "fa fa-star checked"
          : "fa fa-star"}></span>
    })
  }
</div>);
class PaperExampleSimple extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props.val, 'paper');
    var random = Math.abs(parseInt(Math.random() * 10) - 5);
    console.log(random, 'in render');
    return (<MuiThemeProvider>
      <div className="parentPapper">
        {
          this.props.val.map((object) => (<Link to={'/Details?id=' + object.id}>
            <Paper id={object.id} key={object.id} style={style} zDepth={3} children={<Details imgDetails = {
                object
              }
              r = {
                random
              } />}/>
          </Link>))
        }
      </div>

    </MuiThemeProvider>);
  }
}
const mapStateToProps = ({main}) => {
  const {isloading, data} = main;
  return {isloading, data}
}
export default connect(mapStateToProps, {LOAD_FIREBASE_DATA})(PaperExampleSimple);
