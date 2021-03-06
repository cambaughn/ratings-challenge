import React, { useEffect, useState } from 'react';
import styles from './ReviewsOverview.module.scss';
import StarRating from '../StarRating/StarRating';


export default function ReviewsOverview({ product, reviews, openReviewModal }) {
  const [rating, setRating] = useState(null);

  const determineAverageRating = () => {
    if (reviews.length) {
      let totalRatings = reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0);
      let average = parseFloat((totalRatings / reviews.length).toFixed(1));
      setRating(average);
    }
  }

  useEffect(determineAverageRating, [reviews]);

  return (
    <div className={styles.container}>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.reviewActions}>
        <div className={styles.ratings}>
          <span className={styles.averageRating}>{rating}</span>
          <div className={styles.stars}><StarRating rating={rating}/></div>
        </div>

        <div className={styles.addReviewButton} onClick={openReviewModal}>Add review</div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.reviews}>
        <h3 className={styles.reviewHeader}>Reviews</h3>
        { reviews.map((review, index) => {
          return (
            <div className={styles.reviewWrapper} key={review.text + index}>
              <StarRating rating={review.rating} />
              <span className={styles.reviewText}><span className={styles.reviewRating}>{review.rating}</span> - {review.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
