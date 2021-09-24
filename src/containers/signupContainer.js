import React, { Component } from 'react';
import { withRouter } from 'react-router';

import SignupForm from '../components/SignupForm';

class SignupContainer extends Component {
    render() {
        return (
            <div>
                <SignupForm history={this.props.history}/>
            </div>
        );
    }
}

export default withRouter(SignupContainer);


