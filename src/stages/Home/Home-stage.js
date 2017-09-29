import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {Redirect} from 'react-router-dom';
import Routes from '../../Routes';
import {SheetManager} from '../../model/timesheets'
import ProjectList from '../../components/ProjectList/ProjectList-component'
import moment from 'moment'

import {isSetupDone} from '../../model/Setup/Setup-reducer';

class HomeStage extends Component {

    constructor(props) {
        super(props);
        this.sheetManager = new SheetManager();
        this.state = {
            projects: [],
            hasLoadedProjects: false,
            selectedProject: undefined
        };
    }

    _handleSubmit(event, monthName, dayNumber) {
        event.preventDefault();
        const {state} = this.props;
        const hours = event.target.hours.value;
        this.sheetManager.setHours({
            spreadsheetId: state.setup.spreadsheetId,
            month: monthName,
            day: dayNumber,
            project: this.state.selectedProject,
            hours: hours
        })
    }

    render() {
        const {state} = this.props;

        if (!isSetupDone(state.setup)) {
            return <Redirect to={Routes.setup}/>;
        }

        const now = moment();
        const monthName = now.format('MMMM');
        const dayNumber = now.format('D');

        if (!this.state.hasLoadedProjects) {
            this.sheetManager.listProjects({
                spreadsheetId: state.setup.spreadsheetId,
                month: monthName
            }).then((projectNames) => {
                this.setState({
                    projects: projectNames,
                    hasLoadedProjects: true
                })
            });
        }

        const items = this.state
            .projects
            .map((project) => ({
                id: project,
                name: project
            }));

        return (
            <div className="Home">
                Home
                <div>
                    <form onSubmit={(event) => this._handleSubmit(event, monthName, dayNumber)}>
                        <input type="number"
                               name="hours"
                               defaultValue={8}
                        />
                        <input type="submit"
                               value="Save"
                               disabled={!this.state.selectedProject}
                        />
                    </form>
                </div>
                <ProjectList
                    items={items}
                    onProjectSelected={({id, name}) => {
                        this.setState({
                            selectedProject: name
                        });
                    }}
                />
            </div>
        );
    }
}

HomeStage.propTypes = {
    context: PropTypes.object.isRequired
};

export default withRouter(connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({}, dispatch)
    })
)(HomeStage));
