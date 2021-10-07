import React from 'react';
import styles from './StarRating.module.scss';

export default function StarRating({ rating }) {
  const [fullStars, setFullStars] = useState(0);
  const [halfStars, setHalfStars] = useState(0);
  const [emptyStars, setEmptyStars] = useState(0);

  const determineStars = () => {
    let empty = 5 - rating;
    let full = Math.floor(rating);
    
    setEmptyStars(empty);
  }

  useEffect(determineStars, [rating]);

  return (
    <div className={styles.container}>

    </div>
  )
}
