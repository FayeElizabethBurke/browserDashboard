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
        const image = res.data.hdurl;
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
today = dd + ` ` + months[mm] + ' ' + yyyy;
    const containerStyle = {
      margin: '0',
      width: '98vw',
      height: '100vw',
      backgroundImage: `url(${this.state.image})`,
      webkitFilter: `invert(1)`,
      filter: `invert(1)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `100%`,
      textAlign: `center`
    }
    const headingStyle = {
      fontSize: `120px`,
      opacity: 1 + ` !important`,
      textAlign: `center`,
      paddingBottom: `15%`,
      color: 'white',
      margin: `0`,
      paddingTop: `10%`,
    }
    const smallHeadingStyle = {
      fontSize: `40px`,
      opacity: 1 + ` !important`,
      paddingTop: `2%`,
      paddingBottom: `5%`,
      color: 'white',
      textAlign: `left`,
      margin: `0`
    }

    const iframeStyle = {
      border: `10px solid black`
    }

    return (
      
      <div style={containerStyle}>
        <p style={smallHeadingStyle}>It's {today}</p>
        <h1 style = {headingStyle}>Hello, Faye</h1>



    <Iframe style= {iframeStyle} url="https://calendar.google.com/calendar/embed?src=fayeelizabethburke%40gmail.com&ctz=Australia%2FBrisbane"
        width="1200px"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
      </div>

    )
    
  }
}
