import db from '../firebase/firebaseInit';
import { doc, setDoc, getDoc } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { convertDoc } from './helpers';

const addNewRating = (rating) => {
  const ratingsRef = doc(db, "ratings", uuidv4());
  return setDoc(ratingsRef, rating);
}

// addNewRating({ rating: 4 });

const getRatings = async (product_id) => {
  const ratingsRef = doc(db, `ratings/E5vLHgfK9lPqGTKm5lPm`);
  const ratingSnapshot = await getDoc(ratingsRef);
  const rating = convertDoc(ratingSnapshot);
  return Promise.resolve(rating);
}



export { addNewRating }