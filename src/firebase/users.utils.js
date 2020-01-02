import { firestore } from './firebase.utils';

// Creates or finds user depending on whether or not they are already stored in the database.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {}
  }
  return userRef;
};

export const realTimeMovieFavorites = (currentUser, setCurrentUser) => {
  if (!currentUser) return;
  let subscription = null;
  try {
    subscription = firestore
      .collection(`users/${currentUser.id}/favorites`)
      .onSnapshot(async snapShot => {
        let changes = await snapShot.docChanges();
        let favorites = [...currentUser.favorites];

        changes.forEach(change => {
          let movie = change.doc.data();
          let indexOf = favorites.findIndex(movies => movies.id === movie.id);
          if (change.type === 'added' && indexOf < 0) {
            favorites.push(movie);
          } else if (change.type === 'removed') {
            favorites.splice(indexOf, 1);
          }
        });
        if (currentUser.favorites.length !== favorites.length) {
          setCurrentUser({
            ...currentUser,
            favorites
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
  return subscription;
};

export const addorRemoveMovieToFavorites = async (
  userId,
  movieId,
  title,
  poster
) => {
  const userRef = firestore.doc(`users/${userId}/favorites/${movieId}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    try {
      userRef.set({
        id: movieId,
        title,
        poster
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    userRef.delete();
  }
};

export const getUsersReviews = async userId => {
  const reviews = [];
  const reviewRef = await firestore.collection(`/users/${userId}/reviews`);
  const snapShot = await reviewRef.get();
  snapShot.forEach(doc => {
    let reviewData = doc.data();
    reviews.push({ ...reviewData });
  });
  return reviews;
};

export const doesUsernameExist = async userName => {
  try {
    let user = await firestore
      .collection('users')
      .where('displayName', '==', userName)
      .get();

    if (user.empty) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return err;
  }
};
