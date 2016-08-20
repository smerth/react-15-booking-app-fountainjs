import React, {Component} from 'react';

const styles = {
  header: {
    // display: 'flex',
    // alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    // flex: 1,
    display: 'inline',
    float: 'left',
    fontSize: '1.5rem',
    margin: '1rem',
    color: 'white'
  },
  link: {
    // flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  },
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <div className="container">
       
          <div className="col-xs-8" style={styles.title}>
            <h3>
              React Demo: Appointment List
            </h3>
          </div>
          <div style={styles.link}>
            <a href="https://github.com/smerth/yo-rainbow-react-booking-app" target="_blank">
              Github
            </a>
          </div>
       
        </div>
      </header>
    );
  }
}
