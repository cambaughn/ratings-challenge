import React, { useState } from 'react';
import styles from './ClickableStars.module.scss';
import { determineFullStars, hasHalfStar, determineEmptyStars, roundHalf } from '../../util/helpers/stars';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';


export default function ClickableStars({ rating, setRating }) {
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

    </div>
  )
}
