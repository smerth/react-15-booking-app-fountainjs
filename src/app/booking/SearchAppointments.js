// This is a sub-component, attributes are passed from the parent via props
import React, {Component} from 'react';

export class SearchAppointments extends Component {

  handleSort(e) {
    this.props.handleReOrder(e.target.id, this.props.orderDir);
  } // handleSort

  handleSortOrder(e) {
    this.props.handleReOrder(this.props.orderBy, e.target.id);
  } // handleSort

  handleSearch(e) {
    this.props.handleSearch(e.target.value);
  } // handleSearch

  render() {
    return (
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input
              id="SearchApts"
              onChange={this.handleSearch.bind(this)}
              placeholder="Search" type="text"
              className="form-control"
              aria-label="Search Appointments"
              />
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Sort by: <span className="caret"></span></button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a
                    href="#"
                    id="petName"
                    onClick={this.handleSort.bind(this)}
                    >Pet Name {(this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="aptDate"
                    onClick={this.handleSort.bind(this)}
                    >Date {(this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="ownerName"
                    onClick={this.handleSort.bind(this)}
                    >Owner {(this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a
                    href="#"
                    id="asc"
                    onClick={this.handleSortOrder.bind(this)}
                    >Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="desc"
                    onClick={this.handleSortOrder.bind(this)}
                    >Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ); // return
  } // render
} // Create AptList

SearchAppointments.propTypes = {
  handleReOrder: React.PropTypes.func.isRequired,
  orderDir: React.PropTypes.string.isRequired,
  orderBy: React.PropTypes.string.isRequired
};

module.exports = SearchAppointments;
