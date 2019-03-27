import { LIST, LOGOUT } from '../actions/actionTypes';

const initialState = {
    list: [

    ],

};
export const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST:
            return {
                ...state,
                list: action.list
            };
        case LOGOUT: return initialState
        default:
            return state;
    }
};

