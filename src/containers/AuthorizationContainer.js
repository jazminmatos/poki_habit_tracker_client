import React, { Component } from 'react';
import { withRouter } from 'react-router';

import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

class SignupContainer extends Component {
    render() {
        return (
            <div>
                <SignupForm history={this.props.history}/>
                <LoginForm history={this.props.history}/>
            </div>
        );
    }
}

export default withRouter(SignupContainer);


