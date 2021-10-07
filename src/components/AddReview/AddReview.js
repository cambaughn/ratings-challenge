import React, { useState } from 'react';
import styles from './AddReview.module.scss';


export default function AddReview({ product }) {
  const [text, setText] = useState('');

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>What's your rating?</h1>
      <p className={styles.label}>Rating</p>


      <p className={styles.label}>Review</p>
      <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={'Start typing...'} className={styles.reviewInput} />

      
    </div>
  )
}
