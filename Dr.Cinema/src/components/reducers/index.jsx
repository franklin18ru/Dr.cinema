import { combineReducers } from 'redux';
// IMPORT REDUCERS HERE
import cinemaReducer from './CinemaReducer';
import tokenReducer from './TokenReducer';
import currentCinemaReducer from './CurrentCinemaReducer';
import currentMovieReducer from './CurrentMovieReducer';
import cinemaMovieReducer from './CinemaMovieReducer';
// STATE IS PORTIONED WITH MULTIPLE REDUCERS
export default combineReducers({
    cinemaReducer:cinemaReducer,
    tokenReducer:tokenReducer,
    currentCinemaReducer: currentCinemaReducer,
    currentMovieReducer: currentMovieReducer,
    cinemaMovieReducer: cinemaMovieReducer
});
