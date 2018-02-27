import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {database} from '../firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class Timeslots extends React.Component {

  constructor() {
    super();
    // BigCalendar.momentLocalizer(moment);
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    this.state = {
      eventsData: '',
      isloading: true
    }
  }
  componentWillMount = () => {
    var p = this;
    let id = (window.location.href).split("=")[1];
    const ref = database.ref("timesData:" + id);
    let eventsData = [];
    ref.once("value").then(function(snapshot) {
      var obj = snapshot.val();
      console.log(obj, 'obj');
      eventsData = obj;

      console.log(eventsData, "func");
      if (obj === null) {
        eventsData = [];
      }
      p.setState({eventsData: eventsData, isloading: false});

    })
  }
  convert = (str) => {
    var mnths = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
      },
      date = str.split(" ");

    return [
      date[3],
      mnths[date[1]],
      date[2],
      date[4].split(":").join("-")
    ].join("-");
  }
  render() {
    // console.log(style);
    console.log(this.state.eventsData, 'from render');
    // this.state.eventsData
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    if (!this.state.isloading) {
      console.log(events, 'eve');
      var holdd = [];
      for (var i = 0; i < this.state.eventsData.length; i++) {
        console.log('fa');

        var d = [];
        var constart = (this.convert(this.state.eventsData[i].start)).split("-");
        var consend = (this.convert(this.state.eventsData[i].end)).split("-");
        d['id'] = this.state.eventsData[i].id;
        d['title'] = this.state.eventsData[i].title;
        d['start'] = new Date(parseInt(constart[0]), (parseInt(constart[1]) - 1), parseInt(constart[2]), parseInt(constart[3]), parseInt(constart[4]), parseInt(constart[5]));
        d['end'] = new Date(parseInt(consend[0]), (parseInt(consend[1]) - 1), parseInt(consend[2]), parseInt(consend[3]), parseInt(consend[4]), parseInt(consend[5]));
        console.log(d, "d");
        holdd.push(d);

      }
      console.log(holdd, "holdd");
      return (<MuiThemeProvider>
        <div className="container">
          <BigCalendar events={holdd} step={15} timeslots={8} defaultView="week" defaultDate={new Date()}/>
        </div>
      </MuiThemeProvider>);
    } else {
      return (<div>
        <MuiThemeProvider>
          <CircularProgress className="C"/>
        </MuiThemeProvider>
      </div>)
    }
    console.log(this.state.eventsData, 'stateevents');
    console.log(events, 'events');

  }

}

export default Timeslots;
