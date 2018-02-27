import React from 'react';
import PaperComponent from './PaperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ConfigureStore from './../store/configureStore';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import CircularProgress from 'material-ui/CircularProgress';

class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('landing props', props);
  }

  componentWillMount = () => {
    this.props.LOAD_FIREBASE_DATA();
  }

  _renderPaperComponent() {
    if (this.props.isloading) {
      return (<MuiThemeProvider>
        <div><CircularProgress className="C"/></div>
      </MuiThemeProvider>)
    } else {
      return (<MuiThemeProvider>
        <div>
          <PaperComponent val={this.props.data}/>

        </div>
      </MuiThemeProvider>)

    }
  }

  render() {
    console.log(this.props.data, 'LandingScreen');
    return (<div>
      {this._renderPaperComponent()}
    </div>);
  }
}
const mapStateToProps = ({main}) => {
  const {isloading, data, name} = main;
  return {isloading, data, name}
}
export default connect(mapStateToProps, {LOAD_FIREBASE_DATA})(LandingScreen);
