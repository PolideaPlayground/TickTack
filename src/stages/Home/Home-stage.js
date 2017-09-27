import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router'
import {Redirect} from 'react-router-dom';
import Routes from '../../Routes';

import {isSetupDone} from '../../model/Setup/Setup-reducer';

class HomeStage extends Component {

    render() {
        const { state } = this.props;

        if (!isSetupDone(state.setup)) {
            return <Redirect to={Routes.setup}/>;
        }

        return (
            <div className="Home">
                Home
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
