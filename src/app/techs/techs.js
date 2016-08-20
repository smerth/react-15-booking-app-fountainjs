import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

const styles = {
  container: {
    marginTop: '1rem'
    // background: 'grey',
    // color: 'white'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around'
  }
};

export class Techs extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    axios
      .get('app/techs/techs.json')
      .then(response => {
        this.setState({techs: response.data});
      });
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div className="row" style={styles.techs}>
          {this.state.techs.map((tech, i) => (
            <Tech key={i} tech={tech}/>
          ))}
        </div>
      </div>
    );
  }
}