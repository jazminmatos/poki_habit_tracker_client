import React from 'react';

import Bar from '../components/Bar';
import Coin from '../components/Coin';

const HealthXpContainer = (props) => {
    return (
        <div>
            Health: <Bar amount={props.healthAmount}/>
            <br />
            Experience: <Bar amount={props.xpAmount}/>
            <br />
            <Coin amount={props.coinAmount}/>
        </div>
    );
}

export default HealthXpContainer;
