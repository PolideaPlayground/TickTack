import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Login-style.css';

import {loginWithGoogleCompleted} from "../../state/App/App-actions";
import {Secrets} from '../../secrets';
import {SheetManager} from '../../state/timesheets';

import Header from "../Header/Header-component";

class Login extends Component {
    _loginButtonPressed = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    };

    updateSigninStatus = (isSignedIn) => {
        const {actions} = this.props;
        if (isSignedIn) {
            console.log("Logged in!");
            let manager = new SheetManager('12QJplmOB6Xqj0FGTCRoOH-LzRv1CfmZ6zlnz6IzzFRk', 'August');
            manager.listProjects(function (projects) {
                actions.loginWithGoogleCompleted(projects.map((project, index) => {
                    return {
                        id: index,
                        name: project.name
                    }
                }));
                console.log("Received projects" + projects);
            });
        } else {
            console.log("Not logged");
        }
    }

    initClient = () => {
        console.log("Initing gapi!");
        window.gapi.client.init({
            discoveryDocs: Secrets.DISCOVERY_DOCS,
            clientId: Secrets.CLIENT_ID,
            scope: Secrets.SCOPES
        }).then(() => {
            console.log("Inited!");
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    };

    componentDidMount() {
        window.gapi.load('client:auth2', this.initClient);
    }

    render() {
        return (
            <div className="Login">
                <Header className="Login-header" title="Login"/>
                <div className="Login-main">
                    <div className="Login-button" onClick={this._loginButtonPressed}>Login with google</div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators({loginWithGoogleCompleted}, dispatch)
    })
)(Login);