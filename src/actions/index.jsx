import { USER,LIST } from './actionTypes';

export const LoginData = value => ({
  type: USER,
  user: value,
});

export const ListData = value => ({
  type: LIST,
  list: value,
});
