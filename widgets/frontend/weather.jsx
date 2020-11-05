import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: ''};
  }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => { 
            const weather = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                // debugger
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready
                weather.setState({ weather: xhttp.responseText });
                debugger
            }
            // this.setState = ({ weather: xhttp.responseText });
        };
        
        xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=495a92c0665e65feaf1eab7ce1e23c59`, true);
        xhttp.send();
        });

    }

  render(){
      debugger
      return(
          <div>
              <h1> hi from weather</h1>
              <h1> {this.state.weather.name} </h1>
          </div>
      )
     
 
  }
}
export default Weather;

        // debugger
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);

