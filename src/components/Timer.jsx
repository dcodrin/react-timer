import React from 'react';

import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {totalSeconds: 0, timerStatus: 'stopped'};
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
    }

    handleStatusChange(timerStatus) {
        switch (timerStatus) {
            case 'started':
                this.startTimer();
                break;
            case 'paused':
                this.pauseTimer();
                break;
            case 'stopped':
                this.clearTimer();
        }
        this.setState({timerStatus});
    }

    startTimer() {
        this.timer = setInterval(() => {
            let {totalSeconds} = this.state;
            this.setState({totalSeconds: totalSeconds + 1});
        }, 1000);
    }

    pauseTimer() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    clearTimer() {
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({totalSeconds: 0});
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={this.state.totalSeconds}/>
                <Controls status={this.state.timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}

Timer.propTypes = {};
Timer.defaultProps = {};

export default Timer;
