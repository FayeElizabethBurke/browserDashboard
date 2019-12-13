import React from 'react';

import axios from 'axios';

export default class apis extends React.Component {
  state = {
    image: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=nEw4cQXLDEnerOgiB1nvFzHr4aJMa8BeOXOpVbLd`)
      .then(res => {
        const image = res.data.hdurl;
        this.setState({ image });
      })
  }

  render() {
    const containerStyle = {
      margin: '0',
      width: '100%',
      height: '800px',
      backgroundImage: `url(${this.state.image})`,
      opacity: `0.8`
    }
    return (
      // <ul>
      //   { this.state.image.map(person => <li>{person.address.suite}</li>)}
      // </ul>
      <div style={containerStyle}>
        <ul>
        <li>{this.state.image}</li>
      </ul>
      </div>

    )
  }
}
