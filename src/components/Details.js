import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
// import './css/detailsCard.css';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isloading: true,
    //   roomDetails: []
    // };
console.log(props.data,'detailcs');
  }

  componentWillMount = () => {
    // let id = (window.location.href).split("=")[1];
    // let roomDetails = (JSON.parse(localStorage.getItem('data'))[id]);
    // this.setState({roomDetails: roomDetails});
  }

  render() {
      let id = (window.location.href).split("=")[1];
      console.log(this.props.data[id]['seconndaryImg'],'details');
    return (<div>
      <MuiThemeProvider>
        <Card>
          <CardMedia>
            <Carousel>


               <div>
                <img src={this.props.data[id]['seconndaryImg'][0]['url']} alt="ga"/>
                <p className="legend">Room 1</p>
              </div>
              <div>
                <img src={this.props.data[id]['seconndaryImg'][1]['url']} alt="ga"/>
                <p className="legend">Room 2</p>
              </div>
            </Carousel>
          </CardMedia>
          <CardText>
            This spacious 2 bhk multistorey apartment is available for rental and is located in the heart of HSR Layout. It is a semi-furnished property. It is on the fourth floor of the building (total number of floors are 4). The property has 2 bathrooms and 1 balcony. It is well connected to the city areas. It is made in way to provide a comfortable living for the residents. Please contact us for more detail
          </CardText>
          <CardActions>
            <FlatButton label="Book Room" className="bookButton"/>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>);
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
export default connect(mapStateToProps,{LOAD_FIREBASE_DATA})(DetailsCard);
// export default DetailsCard;
