import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Redirect} from 'react-router'

import Routes from '../../Routes';

import {loginWithGoogleCompleted, setTargetTimesheet} from '../../model/Setup/Setup-actions';
import {isSetupDone} from '../../model/Setup/Setup-reducer';

import Login from '../../components/Login/Login-component';
import SetupTimesheet from '../../components/SetupTimesheet/SetupTimesheet-component';

class SetupStage extends Component {

    _onLoginRequest = () => {
        const {context, actions} = this.props;

        if (context.googleClient.isLoggedIn()){
            actions.loginWithGoogleCompleted();
        } else {

        }
    };

    _renderLogin = () => {
        const {context, state} = this.props;
        if (state.setup.isLoggedIn) {
            return <Redirect to={Routes.setupTimesheet}/>
        }

        return <Login onLoginRequest={this._onLoginRequest}/>
    };

    _onTimesheetURLEntered = (url) => {
        const { actions } = this.props;

        actions.setTargetTimesheet(url);
    };

    _renderTimesheetSetup = () => {
        return <SetupTimesheet onTimesheetURLEntered={this._onTimesheetURLEntered} />
    };

    render() {
        const { state } = this.props;

        if (isSetupDone(state.setup)) {
            return <Redirect to={Routes.home}/>;
        }

        return (
            <div className="Setup">
                <Switch>
                    <Route path={Routes.setupLogin} exact render={this._renderLogin}/>
                    <Route path={Routes.setupTimesheet} render={this._renderTimesheetSetup}/>
                    <Route render={() => <Redirect to={Routes.setupLogin}/>}/>
                </Switch>
            </div>
        );
    }
}

SetupStage.propTypes = {
    context: PropTypes.object.isRequired
};

export default withRouter(connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({setTargetTimesheet, loginWithGoogleCompleted}, dispatch)
    })
)(SetupStage));
