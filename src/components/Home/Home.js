import React from 'react';
import styles from './Home.module.scss';
import { addNewReview } from '../../util/api/review';
import ReviewsOverview from '../ReviewsOverview/ReviewsOverview';

export default function Home({}) {
  return (
    <div className={styles.container}>
      <ReviewsOverview product={{ name: 'The Minimalist Entrepreneur' }} />
    </div>
  )
}
