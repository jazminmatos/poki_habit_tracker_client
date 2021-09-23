import React, { Component } from 'react';

import SignupForm from '../components/SignupForm'

class signupContainer extends Component {
    render() {
        return (
            <div>
                Hello from Sign Up Container
                <SignupForm />
            </div>
        );
    }
}

export default signupContainer;
