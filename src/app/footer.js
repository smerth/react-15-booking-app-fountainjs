import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer className="" style={styles.footer}>
        <div className="container">
          Build with ♥ by &nbsp;
          <a href="https://github.com/smerth/yo-rainbow-react-booking-app">
            Smerth
          </a>
        </div>
      </footer>
    );
  }
}
