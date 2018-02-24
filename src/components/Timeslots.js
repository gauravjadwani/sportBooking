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
        let id = (window.location.href).split("=")[1];
        // console.log(this.props.data[id]['seconndaryImg'],'details');
    const ref = database.ref("timesData:"+id);
    let eventsData = [];
    ref.once("value").then(function(snapshot) {
      var obj = snapshot.val();
      console.log(obj,'obj');
      eventsData=obj;

      console.log(eventsData,"func");
      p.setState({eventsData:eventsData,isloading:false});

  })
// console.log(this.state.eventData,'insidewillmpunt');
}
convert=(str)=> {
    var mnths = {
        Jan:"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06",
        Jul:"07", Aug:"08", Sep:"09", Oct:"10", Nov:"11", Dec:"12"
    },
    date = str.split(" ");

    return [ date[3], mnths[date[1]], date[2],date[4].split(":").join("-") ].join("-");
}
render() {
    // console.log(style);
    console.log(this.state.eventsData,'from render');
    // this.state.eventsData
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    if(!this.state.isloading){
      console.log(events,'eve');
      var holdd=[];
      // console.log(events,'eve');

      // var dummy=events;

      // console.log(this.state.eventsData[0]['end'],'kill');
      // var con=(this.convert(dummy[0].start)).split("-");
      // var o={
      //   start:new Date(parseInt(con[0]),(parseInt(con[1])-1),parseInt(con[2]),parseInt(con[3]),parseInt(con[4]),parseInt(con[5]))
      // }
      // console.log(o,"o")
        // console.log(this.convert(this.state.eventsData[3]['end']),"funccc");
      for(var i=0;i<this.state.eventsData.length;i++){
        console.log('fa');

        var d=[];
          var constart=(this.convert(this.state.eventsData[i].start)).split("-");
          var consend=(this.convert(this.state.eventsData[i].end)).split("-");
          d['id']=this.state.eventsData[i].id;
          d['title']=this.state.eventsData[i].title;
        d['start']=new Date(parseInt(constart[0]),(parseInt(constart[1])-1),parseInt(constart[2]),parseInt(constart[3]),parseInt(constart[4]),parseInt(constart[5]));
        d['end']=new Date(parseInt(consend[0]),(parseInt(consend[1])-1),parseInt(consend[2]),parseInt(consend[3]),parseInt(consend[4]),parseInt(consend[5]));
        console.log(d,"d");
        holdd.push(d);

      }
      console.log(holdd,"holdd");
      // var i=JSON.parse(events);
      // console.log(JSON.stringify(events),'render events');

          // console.log(i,"kala");
      return (
           <MuiThemeProvider>
           <div className="container">
             <BigCalendar
     events={holdd}
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
      return(<div>loading</div>)
    }
      console.log(this.state.eventsData,'stateevents');
            console.log(events,'events');

  }

}

export default Timeslots;
