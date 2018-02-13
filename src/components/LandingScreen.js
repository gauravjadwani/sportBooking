import React from 'react';
import PaperComponent from './PaperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LandingScreen extends React.Component {
  constructor(props){
    super(props);
    this.c=[
      {
        id:'1',
       img: 'images/grid-list/00-52-29-429_640.jpg',
       title: 'Breakfast',
       author: 'jill111',
     },
     {
       id:'2',
      img: 'images/grid-list/00-52-29-429_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      id:'3',
     img: 'images/grid-list/00-52-29-429_640.jpg',
     title: 'Breakfast',
     author: 'jill111',
   },
   {
     id:'4',
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  ,
  {
    id:'5',
   img: 'images/grid-list/00-52-29-429_640.jpg',
   title: 'Breakfast',
   author: 'jill111',
 },
 ,
 {
   id:'6',
  img: 'images/grid-list/00-52-29-429_640.jpg',
  title: 'Breakfast',
  author: 'jill111',
},
,
{
  id:'7',
 img: 'images/grid-list/00-52-29-429_640.jpg',
 title: 'Breakfast',
 author: 'jill111',
},
,
{
  id:'8',
 img: 'images/grid-list/00-52-29-429_640.jpg',
 title: 'Breakfast',
 author: 'jill111',
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
