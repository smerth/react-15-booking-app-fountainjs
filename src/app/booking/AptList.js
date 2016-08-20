// This is a sub-component, attributes are passed from the parent via props
import React, {Component} from 'react';

export class AptList extends Component {

  handleDeleteClick() {
    this.props.handleDelete(this.props.whichItem);
  }

  render() {
    return (
      <li className="pet-item media">
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDeleteClick.bind(this)}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{this.props.singleItem.petName}</span>
            <span className="apt-date pull-right"> {this.props.singleItem.aptDate}</span>
          </div>
          <div className="owner-name"><span className="label-item">Owner: </span>
          {this.props.singleItem.ownerName}</div>
          <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
        </div>
      </li>
      ); // return
  } // render
} // Create AptList

AptList.propTypes = {
  singleItem: React.PropTypes.object.isRequired,
  whichItem: React.PropTypes.object.isRequired,
  handleDelete: React.PropTypes.func.isRequired
};

module.exports = AptList;
