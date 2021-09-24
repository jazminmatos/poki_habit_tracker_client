import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';

class signupForm extends Component {
    state = {
        name: ''
    }
    // Can move state to signupContainer???

    handleChange = e => {
        // console.log(this.state)
        const { name, value } = e.target

        this.setState({
            [name]: value
        })        
    }

    handleSubmit = e => {
        e.preventDefault()
        // call an action that will dispatch a new object to our reducer
        // Reducer updates our store state
        // At the same time, the action is going to make a POST fetch so that we can persist it to our db
        this.props.fetchUser(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Name:</label>
                    <br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Log In or Sign Up"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { fetchUser })(signupForm);
