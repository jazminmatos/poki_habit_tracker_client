import React from 'react';

import Bar from '../components/Bar';
import Coin from '../components/Coin';

const HealthXpContainer = () => {
    return (
        <div>
            Hello from HealthXpContainer
            <Bar name={"Health:"}/>
            <Bar name={"Xp:"}/>
            <Coin />
        </div>
    );
}

export default HealthXpContainer;
