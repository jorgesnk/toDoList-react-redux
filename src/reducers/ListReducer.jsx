import { LIST } from '../actions/actionTypes';

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
        default:
            return state;
    }
};

