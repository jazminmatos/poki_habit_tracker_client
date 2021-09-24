import React, { Component } from 'react';

import SignupForm from '../components/SignupForm';

class signupContainer extends Component {
    state = {
        users: []
    }

    componentDidMount () {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => {
            // debugger
            console.log("User List:", users)
            this.setState({
                users
            })
        })
    }

    render() {
        return (
            <div>
            debugger
                <SignupForm users={this.state}/>
            </div>
        );
    }
}

export default signupContainer;


