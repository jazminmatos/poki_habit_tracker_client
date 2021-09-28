import React from 'react';
import { connect } from 'react-redux';

import Pokemon from '../components/Pokemon';
import HealthXpContainer from './HealthXpContainer';
import TrackerContainer from './TrackerContainer'


// use isloading state to determine whether or not to render profile page 
const ProfileContainer = (props) => {
    // console.log("inside ProfileContainer:", props.users)
    // console.log("props:", props)
    const user = props.users
    // console.log("user:", user)
    debugger
    // NEED TO ADD IF/ELSE FOR WHEN A USER DOESN'T HAVE POKEMON
    return (
        <div>
            <br />
            {props.loading ? "LOADING..." : (
                <div> 
                    Hello {user.name}! Welcome to your profile.
                    <Pokemon name={user.pokemons[0].name} image={user.pokemons[0].image_url}/>
                    <HealthXpContainer healthAmount={user.pokemons[0].health} xpAmount={user.pokemons[0].xp} coinAmount={user.coins}/>
                </div>
            )
            }
            __________________________________________
            <br />
            {user.tasks.length < 0 ? "You have no tasks yet..." : (
                <div>
                    <TrackerContainer tasks={user.tasks}/>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        loading: state.users.loading
    }
}

export default connect(mapStateToProps)(ProfileContainer);

// Things I need to pass down 
// Pokemon => pokemon picture, pokemon name
// HealthXpContainer => health amount, xp amount, coin amount

// How do I get access to the above?
// Redux via store via connect via mapStateToProps & mapDispatchToProps 
// Need to pass in props as an argument b/c it's a functional component

// ADD LOGIC THAT SAYS THAT USER IS THE ONE WHOSE isLoggedIn ATTRIBUTE IS TRUE
    // const user = props.users.filter((u) => u.isLoggedIn)
    // debugger
    // Once isLoggedIn attribute is updated, add the following below:
    // Hello {user.name}