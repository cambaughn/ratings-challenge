const determineFullStars = (rating) => {
  return Math.floor(rating);
}

const hasHalfStar = (rating) => {
  return rating % 1 !== 0;
}

const determineEmptyStars = (rating) => {
  return Math.floor(5 - rating);
}

const roundHalf = (number) => {
  return Math.round(number * 2) / 2;
}

export { determineFullStars, hasHalfStar, determineEmptyStars, roundHalf }