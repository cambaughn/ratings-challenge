import React, { useState, useEffect } from 'react';
import styles from './StarRating.module.scss';
import classNames from 'classnames';
import { determineFullStars, hasHalfStar, determineEmptyStars, roundHalf } from '../../util/helpers/stars';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';

export default function StarRating({ rating, setRating, clickable }) {
  const [fullStars, setFullStars] = useState(0);
  const [halfStar, setHalfStar] = useState(false);
  const [emptyStars, setEmptyStars] = useState(0);
  const [stars, setStars] = useState([]);
  const [virtualRating, setVirtualRating] = useState(null);
  
  const resetVirtualRating = () => { // reset the virtual rating to null after the mouse leaves the clickable area
    setVirtualRating(null);
  }

  const determineMousePosition = (event, index) => {
    if (clickable) {
      let width = event.currentTarget.offsetWidth;
      let bounds = event.target.getBoundingClientRect();
      let x = event.clientX - bounds.left;
      // let y = event.clientY - bounds.top;
      let halfStar = x <= (width / 2);
      let newVirtualRating = halfStar ? index + 0.5 : index + 1;
      newVirtualRating = newVirtualRating < 1 ? 1 : newVirtualRating;

      setVirtualRating(newVirtualRating);
    }
  }

  const setVirtualRatingAsRating = () => {
    setRating(virtualRating);
    resetVirtualRating();
  }

  const determineStars = () => {
    if (rating) {
      let currentRating = virtualRating ? roundHalf(virtualRating) : roundHalf(rating);
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

  useEffect(determineStars, [rating, virtualRating]);


  return (
    <div className={styles.container} onMouseLeave={resetVirtualRating} onClick={setVirtualRatingAsRating}>
      { stars.map((star, index) => {
        if (star === 1) {
          return (
            <div className={classNames({ [styles.clickableStar]: clickable })} onMouseMove={(event) => determineMousePosition(event, index)} key={uuidv4()}>
              <Star className={styles.star} key={uuidv4()} />
            </div>
          )
        } else if (star === 0.5) {
          return (
            <div className={classNames({ [styles.clickableStar]: clickable })} onMouseMove={(event) => determineMousePosition(event, index)} key={uuidv4()}>
              <StarHalf className={styles.star}  />
            </div>
          )
        } else {
          return (
            <div className={classNames({ [styles.clickableStar]: clickable })} onMouseMove={(event) => determineMousePosition(event, index)} key={uuidv4()}>
              <StarBorder className={styles.star} />
            </div>
          )
        }
      })}
    </div>
  )
}
