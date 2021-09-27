import React from 'react';

import Bar from '../components/Bar';
import Coin from '../components/Coin';

const HealthXpContainer = (props) => {
    return (
        <div>
            Hello from HealthXpContainer
            
            <Bar amount={props.healthAmount}/>
            <Bar amount={props.xpAmount}/>
            <Coin amount={props.coinAmount}/>
        </div>
    );
}

export default HealthXpContainer;
