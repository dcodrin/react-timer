import React from 'react';

class Controls extends React.Component {
    render() {
        const {countdownStatus} = this.props;
        const renderStartStopBtn = () => {
            if(countdownStatus === 'started'){
                return (<button className="button secondary">Pause</button>);
            } else if (countdownStatus === 'paused'){
                return (<button className="button primary">Start</button>);
            }
        };
        return (
            <div className="controls">
                {renderStartStopBtn()}
                <button className="button alert">Clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
};
Controls.defaultProps = {};

export default Controls;
