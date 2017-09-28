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
            hasLoadedProjects: false
        };
    }

    render() {
        const {state} = this.props;

        if (!isSetupDone(state.setup)) {
            return <Redirect to={Routes.setup}/>;
        }

        if (!this.state.hasLoadedProjects) {
            const now = moment();
            const monthName = now.format('MMMM');
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
                <ProjectList
                    items={items}
                    onProjectSelected={({id, name}) => {
                        console.log(`Selected: ID "${id}", Name "${name}"`)
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
