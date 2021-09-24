import React, { Component } from 'react';

import SignupForm from '../components/SignupForm';

class signupContainer extends Component {
    
    componentDidMount () {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => console.log("fetchFromMount", users))
    }

    render() {
        return (
            <div>
                <SignupForm />
            </div>
        );
    }
}

export default signupContainer;


