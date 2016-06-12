import React from 'react';

import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';


class Countdown extends React.Component {

    constructor() {
        super();

        this.state = {
            totalSeconds: 0,
            countdownStatus: 'stopped'
        };

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'paused':
                    this.pauseTimer();
                    break;
                case 'stopped':
                    this.resetTimer();
                    break;
            }
        }
    }


    componentWillUnmount() {
        //Clear interval
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer() {
        this.timer = setInterval(() => {
            let secondsRemaining = this.state.totalSeconds - 1;
            this.setState({totalSeconds: secondsRemaining >= 0 ? secondsRemaining : 0});
            if (secondsRemaining === 0) {
                this.setState({
                    countdownStatus: 'stopped',
                    totalSeconds: 0
                });

            }
        }, 1000);
    }

    pauseTimer() {
        clearInterval(this.timer);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.setState({totalSeconds: 0});
    }

    handleSetCountdown(totalSeconds) {
        this.setState({
            totalSeconds: totalSeconds,
            countdownStatus: 'started'
        });
    }

    handleStatusChange(countdownStatus) {
        this.setState({countdownStatus});
    }

    render() {
        const {countdownStatus} = this.state;
        const renderControls = () => {
            if (countdownStatus !== 'stopped') {
                return (
                    <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>);
            } else {
                return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>);
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={this.state.totalSeconds}/>
                {renderControls()}
            </div>
        );
    }
}

Countdown.propTypes = {};
Countdown.defaultProps = {};

export default Countdown;
