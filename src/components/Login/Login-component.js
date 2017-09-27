import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Login-style.css';

class Login extends PureComponent {
    _onLoginRequest = () => {
        const {onLoginRequest} = this.props;
        onLoginRequest();
    };

    render() {
        return (
            <div className="Login">
                <h1>Setup(1/2)</h1>
                <p>First: Login with your Polidea google account</p>
                <div className="Login-main">
                    <div className="Login-button" onClick={this._onLoginRequest}>Login with google</div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    onLoginRequest : PropTypes.func.isRequired
};

export default Login;