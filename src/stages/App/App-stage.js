import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';

import Splash from '../../components/Splash/Splash-component';
import HomeStage from '../Home/Home-stage';
import SetupStage from '../Setup/Setup-stage';

import Routes from '../../Routes';

import './App-style.css';

class AppStage extends Component {
    constructor(props) {
        super(props);
        console.log("App constructor");
    }

    render() {
        console.log("App render");

        const {context, state} = this.props;

        if (!context.isReady()) {
            context.init()
                .then(() => {
                    this.forceUpdate();
                });

            return <div className="App">
                <Splash/>
            </div>
        } else {
            return (
                <div className="App">
                    <Switch>
                        <Route path={Routes.home} exact render={() => <HomeStage context={context}/>}/>
                        <Route path={Routes.setup} render={() => <SetupStage context={context}/>}
                        />
                        <Route render={() => <Redirect to={Routes.home}/>}/>
                    </Switch>
                </div>
            );
        }
    }
}

AppStage.propTypes = {
    context: PropTypes.object.isRequired
};

export default withRouter(connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({}, dispatch)
    })
)(AppStage));
