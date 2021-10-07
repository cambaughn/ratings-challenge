import React, { useState, useEffect } from 'react';
import styles from './StarRating.module.scss';
import { determineFullStars, hasHalfStar, determineEmptyStars, roundHalf } from '../../util/helpers/stars';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';


export default function StarRating({ rating }) {
  const [fullStars, setFullStars] = useState(0);
  const [halfStar, setHalfStar] = useState(false);
  const [emptyStars, setEmptyStars] = useState(0);

  const determineStars = () => {
    if (rating) {
      let roundedRating = roundHalf(rating);
      setEmptyStars(determineEmptyStars(roundedRating));
      setFullStars(determineFullStars(roundedRating));
      setHalfStar(hasHalfStar(roundedRating));
    }
  }

  useEffect(determineStars, [rating]);

  return (
    <div className={styles.container}>
      { [...Array(fullStars)].map((star, index) => (
        <Star className={styles.star} key={index} />
      ))}

      { halfStar &&
        <StarHalf className={styles.star} />
      }
      
      { [...Array(emptyStars)].map((star, index) => (
        <StarBorder className={styles.star} key={fullStars + index} />
      ))}
    </div>
  )
}
