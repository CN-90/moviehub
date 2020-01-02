import { firestore } from './firebase.utils';

export const getUsersFavorites = async userId => {
  const favorites = [];
  const favoritesRef = await firestore.collection(`/users/${userId}/favorites`);
  const snapShot = await favoritesRef.get();
  snapShot.forEach(doc => {
    let favoriteData = doc.data();
    favorites.push({ ...favoriteData });
  });
  return favorites;
};
