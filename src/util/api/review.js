import db from '../firebase/firebaseInit';
import { doc, setDoc, getDocs, query, collection, where } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { convertDoc, convertSnapshot } from './helpers';

const addNewReview = (review) => {
  const reviewsRef = doc(db, "reviews", uuidv4());
  return setDoc(reviewsRef, review);
}

// addNewRating({ rating: 4 });

const getReviewsForProduct = async (product_id) => {
  const reviewsQuery = query(collection(db, "reviews"), where("product", "==", product_id));
  const reviewsSnapshot = await getDocs(reviewsQuery);
  const reviews = convertSnapshot(reviewsSnapshot);
  console.log('got reviews ', reviews);
  return Promise.resolve(reviews);
}



export { addNewReview, getReviewsForProduct }