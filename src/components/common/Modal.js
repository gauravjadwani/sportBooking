import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {SHOW_MODAL, HIDE_MODAL} from './../../actions';
import TimePicker from 'material-ui/TimePicker';
import Timeslots from './../Timeslots';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(){

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

            <input type="number" placeholder="No of players" ref="name"/>
            <TimePicker hintText="Time From" autoOk={true}/>
            <TimePicker hintText="Time From" autoOk={true}/>
            <button className="btn btn-primary">Submit</button>
              </div>
            <div className="col-md-3">
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>

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
// export default CustomModal;
