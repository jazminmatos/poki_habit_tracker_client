import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findOrCreateUser } from '../actions/userActions';
import { fetchUser } from '../actions/userActions'

class signupForm extends Component {
    state = {
        name: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })        
    }
    
    // call an action that will dispatch a new object to our reducer
    // Reducer updates our store state
    // At the same time, the action is going to make a POST fetch so that we can persist it to our db
    handleNewSubmit = e => {
        console.log("inside handleNewSubmit", this.state)
        e.preventDefault()

        this.props.findOrCreateUser(this.state)
        
        this.setState({
            name: ''
        })
        
        this.props.history.push('/profile')
        console.log("history", this.props.history)
    }

    handleExistingSubmit = e => {
        console.log("inside handleExistingSubmit", this.state)
        e.preventDefault()

        this.props.fetchUser(this.state)
        this.setState({
            name: ''
        })
        this.props.history.push('/profile')
    }

    render() {
        return (
            <div>
                <br />
                {/* Create a new profile:
                <form onSubmit={this.handleNewSubmit}>
                    <br />
                    <label>Name:</label>
                    <br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Submit"/>
                </form> */}
                <br /> <br />
                Go to an existing profile:
                <form onSubmit={this.handleExistingSubmit}>
                    <br />
                    <label>Name:</label>
                    <br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Submit"/>
                </form>
            </div>
        );
    }
}


export default connect(null, { findOrCreateUser, fetchUser })(signupForm);


// Code from handleSubmit:
// Does it exist in redux store already?
        // const userMatch = this.props.users.filter(u => u.name === this.state.name)
        // if (userMatch) {
        //     console.log("inside if/else:", "not sure what to do now")
        // } else {
        //     debugger
        // }
