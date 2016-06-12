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
        const {status} = this.props;
        const renderStartStopBtn = () => {
            if(status === 'started'){
                return (<button onClick={this.onStatusChange.bind(null, 'paused')} className="button secondary">Pause</button>);
            } else if (status === 'paused' || status === 'stopped'){
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
    status: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};
Controls.defaultProps = {};

export default Controls;
