import React, { useState } from 'react';
import styles from './AddReview.module.scss';
import StarRating from '../StarRating/StarRating';

export default function AddReview({ product, closeModal }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState(false);
  
  const submitReview = () => {
    if (text.length) {
      closeModal();
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>What's your rating?</h1>
      <p className={styles.label}>Rating</p>
      <div className={styles.starWrapper}>
        <StarRating rating={rating} setRating={setRating} clickable />
      </div>

      <p className={styles.label}>Review</p>
      <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={'Start typing...'} className={styles.reviewInput} />


      <div className={styles.submitReviewButton} onClick={submitReview}>Submit review</div>
      { error &&
        <span className={styles.errorText}>Must include text review</span>
      }
    </div>
  )
}
