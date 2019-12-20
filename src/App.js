import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
//google api key: AIzaSyBH0_ZkBlm2PMYa2XIjFp_fqGEpzYJuYDQ 

export default class apis extends React.Component {
  state = {
    image: [],
    explanation: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=nEw4cQXLDEnerOgiB1nvFzHr4aJMa8BeOXOpVbLd`)
      .then(res => {
        const image = res.data.url;
        this.setState({ image });
        const explanation = res.data.explanation;
        this.setState({ explanation });
      })
  }

  render() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
var today = dd + ` ` + months[mm] + ' ' + yyyy;
    const containerStyle = {
      margin: '0',
      width: '100%',
      height: '800px',
      backgroundImage: `url(${this.state.image})`,
      opacity: `0.8`
    }
    const headingStyle = {
      fontSize: `80px`,
      opacity: 1 + ` !important`,
      textAlign: `center`,
      paddingTop: `15%`,
      color: 'red'
    }
    const smallHeadingStyle = {
      fontSize: `50px`,
      opacity: 1 + ` !important`,
      textAlign: `center`,
      paddingTop: `2%`,
      color: 'red'
    }
    return (
      <div style={containerStyle}>
        <h1 style = {headingStyle}>Hello, Faye</h1>
    <h2 style={smallHeadingStyle}>It's {today}</h2>
    <p>{this.state.explanation}</p>
    <Iframe url="https://calendar.google.com/calendar/embed?src=fayeelizabethburke%40gmail.com&ctz=Australia%2FBrisbane"
        width="100%"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </div>


    )
  }
}
