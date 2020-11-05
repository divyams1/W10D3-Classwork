import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date();
    this.state = { time: this.time };
    
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div>
          <h1> Clock </h1>
          <h1> Date </h1>
          
        </div>
        <div>
          <h1>{this.state.time.toLocaleTimeString()}</h1>
          <h1>
            {this.state.time.getMonth()}/{this.state.time.getDate()}/{this.state.time.getFullYear()}
          </h1>
        </div>
      </div>
    );
  }
}

export default Clock;