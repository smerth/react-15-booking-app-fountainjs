import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem',
  },
  a: { 
    fontWeight: 'bold',
    color: 'yellow'
  },
  about: {
    marginTop: '2em',
    columnCount: '2'
  }
};

export class Title extends Component {
  render() {
    return (
      <div className="component-title" style={styles.title}>
        <h1 style={styles.h1}>About this app</h1>
        <div className="container" style={styles.about}>
          <p>This app was built following the Lynda.com tutorial <a href='https://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3areact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2'>"Building a Web Interface with React.js"</a>. However the build deviates from the tutorial at the outset by electing to use a Yeoman generator from FountainJS called <a href='https://github.com/FountainJS/generator-fountain-react'>generator-fountain-react</a>.</p><p>The Yeoman generator features a robust build process with a ton of features whereas the course code features a simple build process adequate to the needs of the course only. </p><p>This deviation raised a lot issues since the course code build process is based on browerify while the fountain build is based on webpack.  Read more about this build <a href='placeholder://www.later.com'>here</a>.</p><p>A React component renders the "add an appointment" form and controls its visibility. A React component renders the search bar and the sort filter.  Another React component renders the list and the toggling of list items.</p><p>Data loads from an external json file.  You can add appointments but with each page refresh the original json data re-loads.</p><p>Obviously to take this further requires user authentication and data persistance using your backend of choice. Also there is no form validation. And a Javascript solution for date and time pciking is necessary as the html date and time input only renders in Chrome.</p><p>But this demo is all about React...</p>
        </div>
      </div>
    );
  }
}
