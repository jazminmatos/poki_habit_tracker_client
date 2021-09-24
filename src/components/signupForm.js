import React, { Component } from 'react';

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

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div>
                Hello from signupForm
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <label>Pokemon:</label>
                    <input type='text' value={this.state.pokemon} onChange={this.handleChange} name="pokemon"/>
                    <br /><br />
                    <input type='submit' value="Sign Up"/>
                </form>
            </div>
        );
    }
}

export default signupForm;
