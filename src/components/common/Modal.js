import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {SHOW_MODAL, HIDE_MODAL} from './../../actions';
import TimePicker from 'material-ui/TimePicker';
import Timeslots from './../Timeslots';
import {database} from '../../firebase';


class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nop:'',
      tfrom:'',
      ttill:''
    }
  }
  onSubmit(data){
console.log(data,"data modal");
console.log(data.ttill,"data ttill");
console.log(data.tfrom,"data tfrom");
let id = (window.location.href).split("=")[1];
var p='timesData:'+id;
const ref = database.ref();
console.log(p,"id from modal");

var eventsData = [];
ref.once("value").then(function(snapshot) {
var obj = snapshot.val();
console.log(obj,'objj');
if(p in obj){
  let holder={};
  holder['allDay']=false;
  holder['bgColor']="#ff7f50";
  holder['bookersname']='bookername';
  holder['end']=''+data.ttill;
  holder['start']=''+data.tfrom;
  holder['title']='script';
  console.log(eventsData,'after updating if');
    console.log('checkif',holder,eventsData);
    obj[p].push(holder);
  ref.set(obj);
}
else{
  let holder={};
  holder['allDay']=false;
  holder['bgColor']="#ff7f50";
  holder['bookersname']='bookername';
  holder['end']=''+data.ttill;
  holder['start']=''+data.tfrom;
  holder['title']='script';
  console.log('check',holder,eventsData);
  eventsData.push(holder);
  obj[p]=eventsData;
    ref.set(obj);
}
console.log(obj,'obj');
eventsData=obj;

console.log(data,"data inside");
});

  console.log(eventsData,'from modal');
  this.props.HIDE_MODAL();
}
  render() {
    console.log(this.props, 'modal.js');
    return (<div className="modal-container">

      <Modal show={this.props.showModal} onHide={this.props.HIDE_MODAL} container={this} aria-labelledby="contained-modal-title">
        <Modal.Header closeButton="closeButton">
          <Modal.Title id="contained-modal-title">
            Session Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">

            <input type="number" placeholder="No of players" ref="name" onChange={(event)=>this.setState({ nop: event.target.value})}/>
            <TimePicker hintText="Time from" autoOk={true} onChange={(event,date)=>this.setState({ tfrom: date})}/>
            <TimePicker hintText="Time Till" autoOk={true} onChange={(event,date)=>this.setState({ ttill: date})}/>
            <button className="btn btn-primary" onClick={(state)=>this.onSubmit(this.state)}>Submit</button>
              </div>
            <div className="col-md-3">
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
  {console.log(this.state)}
        </Modal.Footer>
      </Modal>
    </div>)
  }
}

const mapStateToProps = ({main}) => {
  const {isloading, data, showModal} = main;
  return {isloading, data, showModal}
}
export default connect(mapStateToProps, {SHOW_MODAL, HIDE_MODAL})(CustomModal);
