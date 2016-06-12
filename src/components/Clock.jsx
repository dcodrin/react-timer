import React from 'react';

class Clock extends React.Component {

    constructor(){
        super();

        this.formatSeconds = this.formatSeconds.bind(this);
    }

    formatSeconds(totalSeconds) {
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60);
        return `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
    };

    render() {
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(this.props.totalSeconds)}
                </span>
            </div>
        );
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};
Clock.defaultProps = {
    totalSeconds: 0
};

export default Clock;