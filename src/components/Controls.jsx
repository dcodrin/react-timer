import React from 'react';

class Controls extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus) {
        this.props.onStatusChange(newStatus);
    }

    render() {
        const {countdownStatus} = this.props;
        const renderStartStopBtn = () => {
            if(countdownStatus === 'started'){
                return (<button onClick={this.onStatusChange.bind(null, 'paused')} className="button secondary">Pause</button>);
            } else if (countdownStatus === 'paused'){
                return (<button onClick={this.onStatusChange.bind(null, 'started')} className="button primary">Start</button>);
            }
        };
        return (
            <div className="controls">
                {renderStartStopBtn()}
                <button onClick={this.onStatusChange.bind(null, 'stopped')} className="button alert">Clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};
Controls.defaultProps = {};

export default Controls;
