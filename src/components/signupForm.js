import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findOrCreateUser } from '../actions/userActions';

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
    handleSubmit = e => {
        console.log("inside handleSubmit", this.state)
        e.preventDefault()
        // Does it exist in redux store already?
        // const userMatch = this.props.users.filter(u => u.name === this.state.name)
        // if (userMatch) {
        //     console.log("inside if/else:", "not sure what to do now")
        // } else {
        //     debugger
        // }
        this.props.findOrCreateUser(this.state)
        
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
                Check out a profile or create your own:
                <form onSubmit={this.handleSubmit}>
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

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { findOrCreateUser })(signupForm);
