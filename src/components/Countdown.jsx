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
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    }

    startTimer(){
        setInterval(() => {
            let secondsRemaining = this.state.totalSeconds - 1;
            this.setState({totalSeconds: secondsRemaining >= 0 ? secondsRemaining : 0});
        }, 1000);
    }

    handleSetCountdown(totalSeconds) {
        this.setState({
            totalSeconds: totalSeconds,
            countdownStatus: 'started'
        });
    }

    render() {
        return (
            <div>
                <Clock totalSeconds={this.state.totalSeconds}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
                <Controls countdownStatus='paused'/>
            </div>
        );
    }
}

Countdown.propTypes = {};
Countdown.defaultProps = {};

export default Countdown;
