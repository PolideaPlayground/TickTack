import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Routing from './Consts.js'
import Redirector from './Redirector.js'
import Login from './Login.js'
import TimesheetURL from './TimesheetURL.js'
import TimeOFill from './Time-O-Fill.js'
import SelectProjects from './SelectProjects.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">    
                <Route exact path={Routing.main} component={Redirector}/>
                <Route path={Routing.login} component={Login}/>
                <Route path={Routing.timesheetURL} component={TimesheetURL}/>
                <Route path={Routing.timeFilling} component={TimeOFill}/>
                <Route path={Routing.projectSelection} component={SelectProjects}/>
            </div>
        );
    }
}

export default App;
