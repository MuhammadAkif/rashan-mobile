import {
    SET_USER,
    SET_USERS_ERROR,
    SET_USERS_PROCESSING,
    SET_SEARCHED_USERS,
    GET_ALL_USERS,
    SET_EDIT_USER,
    SET_DEPARTMENTS,
    SET_USER_ROLES,
    SET_VIEWS,
    SET_TOTAL_USERS
} from '../action-types/user-action-types';


const initState = () => {
    return {
        processing: false,
        message: 'Unable to find user data',
        error: null,
        user: null,
        allUsers: [],
        searchedUsers: null,
        editingUser: null,
        RolesArray: null,
        Departments: null,
        views: null,
        totalUsers:null
    };
};

const user_reducer = (state = initState(), action) => {

    let newState = {...state};

    switch (action.type) {
        case SET_USER:
            setData(newState, action.payload, 'user');
            break;
        case SET_USERS_ERROR:
            setData(newState, action.payload, 'error');
            break;
        case SET_USERS_PROCESSING:
            setData(newState, action.payload, 'processing');
            break;
    
        default:
            break;
    }

    return newState;
};

const setData = (state, payload, key) => {
    state[key] = payload;
};


export default user_reducer;
