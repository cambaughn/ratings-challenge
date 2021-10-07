import React, { useState } from 'react';
import styles from './AddReview.module.scss';
import StarRating from '../StarRating/StarRating';
import { useSelector, useDispatch } from 'react-redux';
import { setReviews } from '../../util/redux/actionCreators';
import { addNewReview } from '../../util/api/review';


export default function AddReview({ product, closeModal }) {
  const reviews = useSelector(state => state.reviews);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  
  const submitReview = () => {
    if (text.length) {
      let review = { text, rating, product: product.id };
      let updatedReviews = [ review, ...reviews ];
      dispatch(setReviews(updatedReviews));
      addNewReview(review);
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
