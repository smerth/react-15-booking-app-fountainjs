// This is a sub-component, attributes are passed from the parent via props
import React, {Component} from 'react';

const styles = {
  addbooking: {
    marginTop: '1rem'
  }
};

export class AddAppointment extends Component {

  toggleAptDisplay() {
    this.props.handleToggle();
  }

  handleAdd(e) {
    const tempItem = {
      petName: this.refs.inputPetName.value,
      ownerName: this.refs.inputOwnerName.value,
      aptDate: this.refs.inputAptDate.value + ' ' +
        this.refs.inputAptTime.value,
      aptNotes: this.refs.inputAptNotes.value
    }; // tempItem
    e.preventDefault();
    this.props.addApt(tempItem);
  } // handleAdd

  render() {
    let displayAptBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };

    return (
      <div style={styles.addbooking} className="panel panel-primary">
        <div className="panel-heading apt-addheading" onClick={this.toggleAptDisplay.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span> Add Appointment
        </div>
        <div className="panel-body" style={displayAptBody}>
          <form className="add-appointment form-horizontal" onSubmit={this.handleAdd.bind(this)}>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="petName"
                  ref="inputPetName"
                  placeholder="Pet's Name"
                  />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="petOwner"
                  ref="inputOwnerName"
                  placeholder="Owner's Name"
                  />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  id="aptDate"
                  ref="inputAptDate"
                  />
              </div>
              <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
              <div className="col-sm-4">
                <input
                  type="time"
                  className="form-control"
                  id="aptTime"
                  ref="inputAptTime"
                  />
              </div>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  id="aptNotes"
                  ref="inputAptNotes"
                  placeholder="Appointment Notes"
                  />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      ); // return
  } // render
} // Create AptList

AddAppointment.propTypes = {
  bodyVisible: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func,
  addApt: React.PropTypes.func
  // whichItem: React.PropTypes.object,
  // onDelete: React.PropTypes.func.isRequired
};

module.exports = AddAppointment;
