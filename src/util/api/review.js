import db from '../firebase/firebaseInit';
import { doc, setDoc, getDoc } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { convertDoc } from './helpers';

const addNewReview = (review) => {
  const reviewsRef = doc(db, "reviews", uuidv4());
  return setDoc(reviewsRef, review);
}

// addNewRating({ rating: 4 });

const getReviews = async (product_id) => {
  const reviewsRef = doc(db, `reviews/E5vLHgfK9lPqGTKm5lPm`);
  const reviewsSnapshot = await getDoc(reviewsRef);
  const review = convertDoc(reviewsSnapshot);
  return Promise.resolve(review);
}



export { addNewReview }