import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

import Smurfs from './Smurfs.js';
import Form from './Form.js';

const SmurfsList = (props) => {
    return (
        <>
            <h1>Smurfs Here</h1>
            <Form />
            <button onClick={props.getData}>
                {props.isLoading ? 'Loading...' : 'Load Smurfs!' }
            </button>
            {props.smurfs && props.smurfs.map(item => (
                <Smurfs key={item.id} smurfs={item} />
            ))}
        </>
    );
};

export const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
};

export default connect(
    mapStateToProps,
    { getData }
)(SmurfsList);