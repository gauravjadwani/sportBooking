import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import CircularProgress from 'material-ui/CircularProgress';
// import './css/svg.css';

const Logged = (props) => (<IconMenu {...props} iconButtonElement={<IconButton> < MoreVertIcon className = "svgColor" style = {{color:'#fffff'}}/></IconButton >} targetOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }} anchorOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }}>
  <MenuItem primaryText="Refresh"/>
  <MenuItem primaryText="Help"/>
  <MenuItem primaryText="Sign out"/>
</IconMenu>);

class AppBarExampleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose = () => this.setState({open: false});
  render(props) {
    console.log(this.props, 'header');
    return (<MuiThemeProvider>
      <div>
        <AppBar title="SportsBooking" left='100' iconClassNameRight="muidocs-icon-navigation-expand-more" style={{
            'text-align' : 'center'
          }} iconElementRight={<Logged />} onLeftIconButtonClick={this.handleToggle}/>
      </div>
    </MuiThemeProvider>)
  }
}

// export default connect(mapStateToProps,{LOAD_FIREBASE_DATA})(AppBarExampleIcon);
export default AppBarExampleIcon;
