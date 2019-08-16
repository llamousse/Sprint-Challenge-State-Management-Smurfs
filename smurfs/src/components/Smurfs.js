import React from 'react';

const Smurfs = (props) => {
    return (
        <div>
            <h3>{props.smurfs.name}</h3>
            <p>{props.smurfs.age}</p>
        </div>
    );
};

export default Smurfs;