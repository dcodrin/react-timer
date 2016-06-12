import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component {

    constructor() {
        super();

        this.state = {totalSeconds: 0};
        this.handleSetCountdown= this.handleSetCountdown.bind(this);
    }

    handleSetCountdown(totalSeconds){
        this.setState({totalSeconds});
    }

    render() {
        return (
            <div>
                <Clock totalSeconds={this.state.totalSeconds}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
}

Countdown.propTypes = {};
Countdown.defaultProps = {};

export default Countdown;
