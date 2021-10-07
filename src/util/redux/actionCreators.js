/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/


function setProduct(product) {
  return {
    type: 'SET_PRODUCT',
    product
  }
}

function setReviews(reviews) {
  return {
    type: 'SET_REVIEWS',
    reviews
  }
}


export {
  setProduct,
  setReviews
};
