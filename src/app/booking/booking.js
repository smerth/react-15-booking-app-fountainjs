// This is the main component and contains the State
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import AptList from './AptList';
import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';

const styles = {
  interface: {
    border: '1px solid lightgray',
    borderRadius: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem'
    // padding: '1rem'
  }
};

export class Booking extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      aptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc',
      queryText: '',
      myAppointments: []
    }; // initial state

    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.addItem = this.addItem.bind(this);
    this.reOrder = this.reOrder.bind(this);
    this.searchApts = this.searchApts.bind(this);
  } // constructor

  componentDidMount() {
    axios
      .get('app/booking/booking.json')
      .then(response => {
        this.setState({myAppointments: response.data});
      });
  } // Component did Mount

  // Component will Unmount - missing...

  deleteMessage(item) {
    const allApts = this.state.myAppointments;
    const newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    }); // setState
  } // deleteMessage

  toggleAddDisplay() {
    const tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    }); // setState
  } // toggleAddDisplay

  addItem(tempItem) {
    const tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({
      myAppointments: tempApts
    }); // setState
  } // addItem

  reOrder(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy, 
      orderDir: orderDir
    }); // setState
  } // reOrder

  searchApts(q) {
    this.setState({
      queryText: q
    }); // setState
  } // searchApts

  render() {
    let filteredApts = [];
    const orderBy = this.state.orderBy;
    const orderDir = this.state.orderDir;
    const queryText = this.state.queryText;
    const myAppointments = this.state.myAppointments;

    myAppointments.forEach(item => {
      if (
        (item.petName.toLowerCase().indexOf(queryText.toLowerCase()) !== -1) ||
        (item.ownerName.toLowerCase().indexOf(queryText.toLowerCase()) !== -1) ||
        (item.aptDate.toLowerCase().indexOf(queryText.toLowerCase()) !== -1) ||
        (item.aptNotes.toLowerCase().indexOf(queryText.toLowerCase()) !== -1)
      ) {
        filteredApts.push(item);
      }
    }); // forEach

    filteredApts = _.orderBy(filteredApts, item => {
      return item[orderBy].toLowerCase();
    }, orderDir); // orderBy

    filteredApts = filteredApts.map((item, index) => {
      return (
        <AptList
          key={index}
          singleItem={item}
          whichItem={item}
          handleDelete={this.deleteMessage}
          />
      ); // return
    });  // filteredApts.map

    return (
      <div style={styles.interface} className="interface container">
        <AddAppointment
          bodyVisible={this.state.aptBodyVisible}
          handleToggle={this.toggleAddDisplay}
          addApt={this.addItem}
          />
        <SearchAppointments
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          handleReOrder={this.reOrder}
          handleSearch={this.searchApts}
          />
        <ul className="item-list media-list">{filteredApts}</ul>
      </div>
    );
  }
}

