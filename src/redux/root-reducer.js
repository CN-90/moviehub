import { combineReducers } from 'redux';

import movieReducer from './movies/movie.reducer';
import userReducer from './user/user.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
  auth: authReducer
});

export default rootReducer;
