import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TimesheetURL extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        if (this.state.value === '') {
            alert('No weź się nie wygłupiaj, podaj urla!');
        } else {
            alert('Ależ tłuściutki url, że hej: ' + this.state.value);
            this._sendUrl(this.state.value)
        }
        event.preventDefault();
    }

    _sendUrl = (url) => {
        const {sendUrl} = this.props;
        if (sendUrl !== undefined) {
            sendUrl(url);
        }
        console.log("sendUrl clicked: " + url);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Drogi miłosniku czasu, czyli Time-O-Fillu!</h2>
                        <h2>Proszę podaj url swojego timesheet'a:</h2>
                        <input type="url" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Lecim dalej!" />
                    </form>
            </div>
        )
    }
}

TimesheetURL.propTypes = {
    sendUrl: PropTypes.func
};

export default TimesheetURL;
