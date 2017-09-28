import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './SetupTimesheet-style.css';

class SetupTimesheet extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {url: props.previousUrl || ''};

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange = (event) => {
        this.setState({url: event.target.value});
    };

    _handleSubmit = (event) => {
        event.preventDefault();

        const {onTimesheetURLEntered} = this.props;
        onTimesheetURLEntered(this.state.url);
    };

    render() {
        return (
            <div className="SetupTimesheet">
                <h1>Setup(2/2)</h1>
                <p>Second: Enter your individual timesheet URL</p>
                <form onSubmit={this._handleSubmit}>
                    <input type="text"
                           name="url"
                           defaultValue={this.state.url}
                           onChange={this._handleChange}
                    />
                    <input type="submit" value="Set"/>
                </form>
            </div>
        )
    }
}

SetupTimesheet.propTypes = {
    onTimesheetURLEntered: PropTypes.func.isRequired
};

export default SetupTimesheet;