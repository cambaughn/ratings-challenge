import React from 'react';
import styles from './ReviewsOverview.module.scss';
import { Star } from '@material-ui/icons';


export default function ReviewsOverview({ product, reviews, openReviewModal }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.reviewActions}>
        <div className={styles.ratings}>
          <span className={styles.averageRating}>3.8</span>
          <div className={styles.stars}><Star /></div>
        </div>

        <div className={styles.addReviewButton} onClick={openReviewModal}>Add review</div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.reviews}>
        <h3 className={styles.reviewHeader}>Reviews</h3>
        { reviews.map((review, index) => {
          return (
            <div className={styles.reviewWrapper}>
              <div className={styles.individualReviewStars}></div>
              <span className={styles.reviewText}><span className={styles.reviewRating}>{review.rating}</span>{review.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
