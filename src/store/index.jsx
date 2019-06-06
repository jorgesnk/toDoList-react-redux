import { createStore } from 'redux';
import { Reducers } from '../reducers';
const devTools= window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = createStore(Reducers,devTools);