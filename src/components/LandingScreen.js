import React from 'react';
import PaperComponent from './PaperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LandingScreen extends React.Component {
  constructor(props){
    super(props);
    this.c=[
      {
        id:'1',
       img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
       title: 'Breakfast',
       author: 'jill111',
       address:'jayanagar'
     },
     {
       id:'2',
      img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
      title: 'Breakfast',
      author: 'jill111',
      address:'jayanagar'
    },
    {
      id:'3',
     img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
     title: 'Breakfast',
     author: 'jill111',
     address:'jayanagar'
   },
   {
     id:'4',
    img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
    title: 'Breakfast',
    author: 'jill111',
    address:'jayanagar'
  },
  ,
  {
    id:'5',
   img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
   title: 'Breakfast',
   author: 'jill111',
   address:'jayanagar'
 },
 ,
 {
   id:'6',
  img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
  title: 'Breakfast',
  author: 'jill111',
  address:'jayanagar'
},
,
{
  id:'7',
 img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
 title: 'Breakfast',
 author: 'jill111',
 address:'jayanagar'
},
,
{
  id:'8',
 img: 'https://statics.sportskeeda.com/wp-content/uploads/2013/03/hall-inside-1451039-1024x639.jpg',
 title: 'Breakfast',
 author: 'jill111',
 address:'jayanagar'
}
    ];

  }
  render() {
    console.log(this.c,'LandingScreen');
    return (

      <div>
   <PaperComponent c={this.c}/>
 </div>
  );
  }
}
export default LandingScreen;
