import React from 'react';

const Smurfs = (props) => {
    return (
        <div>
            <h3>Name: {props.smurfs.name}</h3>
            <p>Age: {props.smurfs.age}</p>
            <p>Height: {props.smurfs.height}</p>
        </div>
    );
};

export default Smurfs;