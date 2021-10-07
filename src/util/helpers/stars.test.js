import { determineEmptyStars, determineFullStars, hasHalfStar } from "./stars";


describe('Can determine full stars correctly', () => {
  let cases = [[5, 5], [4, 4], [3.5, 3], [1.5, 1]];

  test.each(cases)(
    "given %o as an argument, returns %p",
    (input, expectedResult) => {
      const result = determineFullStars(input);
      expect(result).toEqual(expectedResult);
    }
  );
})

describe('Can determine empty stars correctly', () => {
  let cases = [[1, 4], [4, 1], [5, 0], [4.5, 0], [1.5, 3]];

  test.each(cases)(
    "given %o as an argument, returns %p",
    (input, expectedResult) => {
      const result = determineEmptyStars(input);
      expect(result).toEqual(expectedResult);
    }
  );
})

describe('Can determine half stars correctly', () => {
  let cases = [[1.5, true], [4.5, true], [4, false], [5, false],  [3.5, true]];

  test.each(cases)(
    "given %o as an argument, returns %p",
    (input, expectedResult) => {
      const result = hasHalfStar(input);
      expect(result).toEqual(expectedResult);
    }
  );
})