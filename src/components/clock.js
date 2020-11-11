import React from 'react';

class Clockcomp extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
      return (
        <span className="App-clock">{this.props.text + this.state.date.toLocaleTimeString()}</span>
      );
    }
}


export default Clockcomp;