import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions'

class LoginForm extends Component {
    state = {
        name: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })        
    }

    handleSubmit = e => {
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
                <br /> <br />
                Go to an existing profile:
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

export default connect(null, { fetchUser })(LoginForm);
