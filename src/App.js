import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Login from './components/Login/Login.js'
import TimesheetURL from './components/TimesheetURL/TimesheetURL.js'
import TimeOFill from './components/Time-O-Fill/Time-O-Fill.js'
import SelectProjects from './components/SelectProjects/SelectProjects.js'
import './App.css';

import {navigationStates} from "./state/App/App-reducer"


class App extends Component {
    render() {
        const {state, actions} = this.props;

        let mainComponent;
        switch (state.navigation) {
            case navigationStates.LOGIN:
                mainComponent = <Login />;
                break;
            case navigationStates.SETUP_TIMESHEET:
                mainComponent = <TimesheetURL />;
                break;
            case navigationStates.FILL:
                mainComponent = <TimeOFill />;
                break;
            case navigationStates.ADD_PROJECT:
                mainComponent = <SelectProjects />;
                break;
            default:
                mainComponent = <Login />;
                break;
        }

        return (
            <div className="App">
                {mainComponent}
            </div>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({}, dispatch)
    })
)(App);
