import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setReviews } from '../../util/redux/actionCreators';
// Components
import ReviewsOverview from '../ReviewsOverview/ReviewsOverview';
import AddReview from '../AddReview/AddReview';
// Utility functions
import { getProduct } from '../../util/api/product';
import { getReviewsForProduct } from '../../util/api/review';

export default function Home({}) {
  const [reviewModalActive, setReviewModalActive] = useState(false);
  const product = useSelector(state => state.product);
  const reviews = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  const loadProduct = async () => {
    // NOTE: Currently hardcoding the product id to this specific one. In production, this would be switched out for the product id for the current page/focused product.
    let productFromDatabase = await getProduct('fg8AcifHN9A3huWcv3hI');
    console.log('product form db ', productFromDatabase);
    dispatch(setProduct(productFromDatabase));
  }

  const loadReviews = async () => {
    if (product.id) {
      let reviewsForProduct = await getReviewsForProduct(product.id);
      dispatch(setReviews(reviewsForProduct));
    }
  }

  useEffect(loadProduct, []);
  useEffect(loadReviews, [product]);

  return (
    <div className={styles.container}>
      <ReviewsOverview product={product} reviews={reviews} openReviewModal={() => setReviewModalActive(true)} />

      { reviewModalActive &&
        <div className={styles.addReviewWrapper}>
          <AddReview product={product} closeModal={() => setReviewModalActive(false)} />
        </div>
      }
    </div>
  )
}
