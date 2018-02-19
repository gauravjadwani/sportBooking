import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {database} from '../firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Timeslots extends React.Component {
  // eventdata='';

  constructor(){
    super();
      // BigCalendar.momentLocalizer(moment);
      BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
      this.state={
        eventsData:'',
        isloading:true
      }
  }
  componentWillMount=()=>{
        var p=this;
    const ref = database.ref("timesData:1");
    let eventsData = [];
    ref.once("value").then(function(snapshot) {
      var obj = snapshot.val();
  console.log(obj,'obj');
      eventsData=obj;
      p.setState({eventsData:eventsData,isloading:false});

  })
// console.log(this.state.eventData,'insidewillmpunt');
}
render() {
    // console.log(style);
    console.log(this.state.isloading,'from render');
    if(!this.state.isloading){
      return (

           <MuiThemeProvider>
           <div className="container">
        <BigCalendar
          events={this.state.eventsData}
          step={15}
          timeslots={8}
          defaultView="week"
          defaultDate={new Date()}
        />
        </div>
           </MuiThemeProvider>
    );
    }
    else{
      return(<div></div>)
    }
      console.log(this.state.eventsData,'stateevents');
            console.log(events,'events');

  }

}

export default Timeslots;
