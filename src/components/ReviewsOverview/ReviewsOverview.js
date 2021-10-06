import React from 'react';
import styles from './ReviewsOverview.module.scss';


export default function ReviewsOverview({ product = {}, reviews = [] }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.reviewActions}>
        <div className={styles.ratings}>
          <span className={styles.averageRating}>3.8</span>
          <div className={styles.stars}></div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.reviews}>
        <h3 className={styles.reviewHeader}>Reviews</h3>
      </div>
    </div>
  )
}
