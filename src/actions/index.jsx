import { USER, LIST, LOGOUT } from './actionTypes';

export const LoginData = value => ({
  type: USER,
  user: value,
});

export const ListData = value => ({
  type: LIST,
  list: value,
});

export const LogOut = value => ({
  type: LOGOUT,
  list: value,
});
