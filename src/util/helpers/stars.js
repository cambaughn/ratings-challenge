const determineFullStars = (rating) => {
  return Math.floor(rating);
}

const hasHalfStar = (rating) => {
  return rating % 1 !== 0;
}

const determineEmptyStars = (rating) => {
  return Math.floor(5 - rating);
}

export { determineFullStars, hasHalfStar, determineEmptyStars }