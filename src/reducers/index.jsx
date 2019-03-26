import { LoginReduces } from './LoginReducer';
import { combineReducers } from 'redux';
import { ListReducer } from "./ListReducer"


export const Reducers = combineReducers({
  ListStates: ListReducer,
  LoginStates: LoginReduces,
});