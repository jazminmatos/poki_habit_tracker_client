import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
            <br />
            Hello from Pokemon
            <br />
            <img src={props.image} alt={props.name}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default Pokemon;
