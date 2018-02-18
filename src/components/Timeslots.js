import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class Timeslots extends React.Component {
  constructor(){
    super();
      BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
  }
render() {
    // console.log(style);
    return (
      <BigCalendar
        events={events}
        step={15}
        timeslots={8}
        defaultView="week"
        defaultDate={new Date(2015, 3, 12)}
      />
  );
  }

}

export default Timeslots;
