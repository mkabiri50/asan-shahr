import * as actionTypes from './actionTypes';

export const authStart = (values) => {
    return {
        type: actionTypes.AUTH_START,
        values:values
    };
};