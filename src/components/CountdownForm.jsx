import React from 'react';

import Controls from 'Controls';

class CountdownForm extends React.Component {

    constructor() {
        super();

        this.state = {seconds: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({seconds: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const seconds = this.state.seconds;
        // ^ match beginning; [0-9] any characters from 0-9; * match all; $ end with 0-9
        if(seconds.match(/^[0-9]*$/)) {
            this.props.onSetCountdown(Number(seconds));
            this.setState({seconds: ''});
        }
    }

    render() {
        return (
            <div>
                <form className="countdown-form" onSubmit={this.handleSubmit}>
                    <input ref="seconds" onChange={this.handleInputChange} value={this.state.seconds} placeholder="Enter number of seconds" type="text"/>
                    <button className="button expanded" type="submit">Start</button>
                </form>
            </div>
        );
    }
}

export default CountdownForm;
