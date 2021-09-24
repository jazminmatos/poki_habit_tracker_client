import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../actions/userActions';

class signupForm extends Component {
    state = {
        name: '',
        pokemon: ''
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
        this.props.createUser(this.state)
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
                    <label>Choose your starter Pokemon:</label>
                    <br />
                    <input type='text' value={this.state.pokemon} onChange={this.handleChange} name="pokemon"/>
                    <br /><br />
                    <input type='submit' value="Sign Up"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { createUser })(signupForm);
