import React from 'react';
import PaperComponent from './PaperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ConfigureStore from './../store/configureStore';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import CircularProgress from 'material-ui/CircularProgress';
// import {Modal} from 'bootstrap/js/modal';
// import  from './../reducers';

class LandingScreen extends React.Component {
  constructor(props){
    super(props);
    // this.handleModalShow = this.handleModalShow.bind(this);
    //   this.handleModalClose = this.handleModalClose.bind(this);

      // this.state = {
      //   showModal: false
      // };
    }
//   handleModalClose() {
//   this.setState({ showModal: false });
// }
//
// handleModalShow() {
//   this.setState({ showModal: true });
// }
  componentWillMount=()=>{
     this.props.LOAD_FIREBASE_DATA();
  }

  _renderPaperComponent(){
    if(this.props.isloading){
       return(
           <MuiThemeProvider>
         <div><CircularProgress/></div>
         </MuiThemeProvider>
       )
     }else{
       return(
         <MuiThemeProvider>
        <div>
         <PaperComponent val={this.props.data}/>

        </div>
           </MuiThemeProvider>

       )

     }
  }

  render() {
    console.log(this.props.data,'LandingScreen');
    return (
      <div>
      {this._renderPaperComponent()}
 </div>
  );
  }
}
const mapStateToProps = ({main})=>{
  const {
    isloading,
    data
  }=main;
  return {
    isloading,
    data
  }
}
export default connect(mapStateToProps,{LOAD_FIREBASE_DATA})(LandingScreen);
// export default LandingScreen;
