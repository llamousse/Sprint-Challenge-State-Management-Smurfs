import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => {
    const url = 'http://localhost:3333/smurfs';

    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });
        axios
            .get(url)
            .then(res => {
                console.log('data', res.data);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('error', err);
                dispatch({ type: FETCH_DATA_FAIL, payload: err.response });
            })
    };
};