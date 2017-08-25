import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../Header/Header-component';
import ProjectList from '../ProjectList/ProjectList-component';

import {addTimesheetEntry} from "../../state/App/App-actions";

class SelectProject extends Component {
    _projectSelected = (project) => {
        const {actions} = this.props;
        actions.addTimesheetEntry(project);
    };

    render() {
        const {state} = this.props;
        return (
            <div>
                <Header title="Select project"/>
                <ProjectList items={state.projects} onProjectSelected={this._projectSelected}/>
            </div>
        )
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({addTimesheetEntry}, dispatch)
    })
)(SelectProject);