import React from 'react';
import { connect } from 'react-redux';

import Pokemon from '../components/Pokemon';
import HealthXpContainer from './HealthXpContainer';

const ProfileContainer = (props) => {
    console.log("inside ProfileContainer:", props.users)
    // ADD LOGIC THAT SAYS THAT USER IS THE ONE WHOSE isLoggedIn ATTRIBUTE IS TRUE
    // const user = props.users.filter((u) => u.isLoggedIn)

    // Once isLoggedIn attribute is updated, add the following below:
    // Hello {user.name}
    return (
        <div>
            Hello Profile Container 
            <Pokemon />
            <HealthXpContainer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ProfileContainer);

// Things I need to pass down 
// Pokemon => pokemon picture, pokemon name
// HealthXpContainer => health amount, xp amount, coin amount

// How do I get access to the above?
// Redux via store via connect via mapStateToProps & mapDispatchToProps 