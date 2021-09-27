import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateUser } from '../actions/userActions';

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
        
        this.props.CreateUser(this.state)
        
        this.setState({
            name: ''
        })
        
        this.props.history.push('/profile')
        console.log("history", this.props.history)
    }

    render() {
        return (
            <div>
                <br />
                Create a new profile:
                <form onSubmit={this.handleNewSubmit}>
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


export default connect(null, { CreateUser })(signupForm);
