import { USER, LOGOUT } from '../actions/actionTypes';
const initialState = {
  user: {
    name: "",
    token: "",
  }
};
export const LoginReduces = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.user
      };

    case LOGOUT:
      return initialState
    default:
      return state;
  }
};

