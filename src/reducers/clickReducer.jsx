import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
  user: ''
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};