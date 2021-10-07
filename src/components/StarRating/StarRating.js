import React, { useState, useEffect } from 'react';
import styles from './StarRating.module.scss';
import { determineFullStars, hasHalfStar, determineEmptyStars, roundHalf } from '../../util/helpers/stars';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';


export default function StarRating({ rating, setRating, clickable }) {
  const [fullStars, setFullStars] = useState(0);
  const [halfStar, setHalfStar] = useState(false);
  const [emptyStars, setEmptyStars] = useState(0);
  const [stars, setStars] = useState([]);

  const determineRating = () => {
    if (rating) {
      let roundedRating = roundHalf(rating);
      setEmptyStars(determineEmptyStars(roundedRating));
      setFullStars(determineFullStars(roundedRating));
      setHalfStar(hasHalfStar(roundedRating));
    }
  }  
  
  const determineStars = () => {
    if (rating) {
      let currentRating = roundHalf(rating);
      let starsToShow = [];

      for (let i = 0; i < 5; i++) {
        if (currentRating >= 1) { // push a full star: 1
          starsToShow.push(1);
        } else if (currentRating === 0.5) { // push a half star: 0.5
          starsToShow.push(0.5);

        } else { // push an empty star: 0
          starsToShow.push(0);
        }

        currentRating--;
      }

      setStars(starsToShow);
    }
  }

  useEffect(determineStars, [rating]);

  return (
    <div className={styles.container}>
      { stars.map((star, index) => {
        if (star === 1) {
          return <Star className={styles.star} key={index} />
        } else if (star === 0.5) {
          return <StarHalf className={styles.star} key={index} />
        } else {
          return <StarBorder className={styles.star} key={index} />
        }
      })}
    </div>
  )
}
