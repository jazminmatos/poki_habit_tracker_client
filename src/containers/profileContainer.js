import React from 'react';

import Pokemon from '../components/Pokemon';
import HealthXpContainer from './HealthXpContainer';

const ProfileContainer = () => {
    return (
        <div>
            Hello from Profile Container 
            <Pokemon />
            <HealthXpContainer />
        </div>
    );
}

export default ProfileContainer;
