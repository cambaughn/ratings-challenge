import { combineReducers } from 'redux';

const product = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return action.product;
    default:
      return state;
  }
}

const reviews = (state = [], action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return action.reviews;
    default:
      return state;
  }
}


const ratingsApp = combineReducers({
  product,
  reviews
});

export { ratingsApp };
