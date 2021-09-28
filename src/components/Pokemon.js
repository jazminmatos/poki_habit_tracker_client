import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
            {props.name}
            <img src={props.image} alt={props.name}></img>
        </div>
    );
}

export default Pokemon;
