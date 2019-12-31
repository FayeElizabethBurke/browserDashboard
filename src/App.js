import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
//google api key: AIzaSyBH0_ZkBlm2PMYa2XIjFp_fqGEpzYJuYDQ 


export default class apis extends React.Component {
  state = {
    image: [],
    weather: [],
    location: [],
    temp: [],
    icon: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=nEw4cQXLDEnerOgiB1nvFzHr4aJMa8BeOXOpVbLd`)
      .then(res => {
        const image = res.data.hdurl;
        this.setState({ image });
      })

      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=33517b3884fc22bf3c44b3c37a46344f`)
      .then(res => {
        const weather = res.data.weather[0].description;
        this.setState({ weather });
        const location = res.data.name;
        this.setState({ location });
        const temp = res.data.main.temp;
        this.setState({ temp });
        const icon = res.data.weather[0].icon;
        this.setState({ icon });
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
      margin: '0 !important',
      padding: `0`,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${this.state.image})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `110%`,
      textAlign: `center`,
      border: `10px solid black`
    }
//not yet working
    const icon = {
      backgroundImage: `url('http://openweathermap.org/img/w/' + ${this.state.icon} + '.png')`,
      height: `50px`,
      width: `50px`,
      border: `2px solid white`
    }

    const headingStyle = {
      fontSize: `120px`,
      opacity: 1 + ` !important`,
      textAlign: `center`,
      paddingBottom: `20%`,
      color: 'white',
      margin: `0`,
      paddingTop: `7%`,
    }
    const weatherStyle = {
      fontSize: `30px`,
      textAlign: `center`,
      color: `white`,
      backgroundColor: `black`,
      margin: `0`,
      border: `1px solid black`,
      padding: `1%`
    }

    const smallHeadingStyle = {
      fontSize: `40px`,
      opacity: 1 + ` !important`,
      paddingBottom: `5%`,
      paddingTop: `2%`,
      paddingLeft: `2%`,
      color: 'white',
      textAlign: `left`,
      margin: `0`
    }

    const iframeStyle = {
      border: `10px solid black`,
      padding: `0`,
      margin: `0`
    }

    return (
      
      <div style={containerStyle}>
  <p style={weatherStyle}>Expect {this.state.weather} in {this.state.location}. It's {Math.ceil(this.state.temp - 273)} degrees.</p>
        <p style={smallHeadingStyle}>{today}</p>
        <h1 style = {headingStyle}>Hello, Faye</h1>
  {/* <img style={icon} alt=""></img> */}


    <Iframe style= {iframeStyle} url="https://calendar.google.com/calendar/embed?src=fayeelizabethburke%40gmail.com&ctz=Australia%2FBrisbane"
        width="1400px"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>

        
      </div>

    )
    
  }
}
