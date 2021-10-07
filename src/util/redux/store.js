import { createStore } from 'redux';
import { ratingsApp } from './reducers';

const store = createStore(ratingsApp);

export default store;
