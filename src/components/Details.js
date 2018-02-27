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
import CustomModal from './common/Modal';
import {Button}  from 'react-bootstrap';
import {SHOW_MODAL} from './../actions';
import {Link} from 'react-router';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);
console.log(props.data,'detailcs');
  }

  render() {
      let id = (window.location.href).split("=")[1];
      console.log(this.props.data[id]['seconndaryImg'],'details');
    return (
      <MuiThemeProvider>
        <div>

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
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </CardText>
          <CardActions>
            <Button className="btn btn-primary"
              onClick={() => this.props.SHOW_MODAL()}
              >Book Room</Button>
                <Link to={'/Timeslots?id='+id}>
              <a className="btn btn-primary"
                >Show Availability</a>
                </Link>
          </CardActions>
        </Card>
<CustomModal/>
            </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = ({main})=>{
  const {
    isloading,
    data,
    showModal
  }=main;
  return {
    isloading,
    data,
    showModal
  }
}
export default connect(mapStateToProps,{SHOW_MODAL})(DetailsCard);
