import React from 'react';
import { BiCoin } from 'react-icons/bi'

const Coin = (props) => {
    return (
        <div>
            <BiCoin /> {props.amount}
        </div>
    );
}

export default Coin;
