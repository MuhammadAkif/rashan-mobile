import {
    SET_USER,
    SET_USERS_PROCESSING,
    SET_USERS_ERROR,
} from '../action-types/user-action-types';

export const setUser = (user: Object) => {
    return {
        type: SET_USER,
        payload: user
    }
};


export const setUserProcessing = (flag: any) => {
    return {
        type: SET_USERS_PROCESSING,
        payload: flag
    }
};

export const setUserError = (flag: any) => {
    return {
        type: SET_USERS_ERROR,
        payload: flag
    }
};
