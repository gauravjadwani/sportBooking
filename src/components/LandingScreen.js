import React from 'react';
import PaperComponent from './PaperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ConfigureStore from './../store/configureStore';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import CircularProgress from 'material-ui/CircularProgress';
// import  from './../reducers';

class LandingScreen extends React.Component {
  constructor(props){
    super(props);

//     this.c=[
//       {
//         id:'1',
//        img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//        title: 'Breakfast',
//        author: 'jill111',
//        address:'jayanagar'
//      },
//      {
//        id:'2',
//       img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//       title: 'Breakfast',
//       author: 'jill111',
//       address:'jayanagar'
//     },
//     {
//       id:'3',
//      img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//      title: 'Breakfast',
//      author: 'jill111',
//      address:'jayanagar'
//    },
//    {
//      id:'4',
//     img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//     address:'jayanagar'
//   },
//   {
//     id:'5',
//    img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//    title: 'Breakfast',
//    author: 'jill111',
//    address:'jayanagar'
//  },
//  {
//    id:'6',
//   img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//   title: 'Breakfast',
//   author: 'jill111',
//   address:'jayanagar'
// },
// {
//   id:'7',
//  img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//  title: 'Breakfast',
//  author: 'jill111',
//  address:'jayanagar'
// },
// {
//   id:'8',
//  img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
//  title: 'Breakfast',
//  author: 'jill111',
//  address:'jayanagar'
// }
//     ];
    // const store=ConfigureStore();
// console.log(store.getState(),'lol');
  }
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
