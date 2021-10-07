import db from '../firebase/firebaseInit';
import { doc, getDoc } from 'firebase/firestore/lite';
import { convertDoc } from './helpers';

const getProduct = async (product_id) => {
  const productRef = doc(db, `products/${product_id}`);
  const productSnapshot = await getDoc(productRef);
  const product = convertDoc(productSnapshot);
  return Promise.resolve(product);
}

export { getProduct }