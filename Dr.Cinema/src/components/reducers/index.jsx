import { combineReducers } from 'redux';
// IMPORT REDUCERS HERE
import cinemaReducer from './CinemaReducer';
import tokenReducer from './TokenReducer';
import currentCinemaReducer from './CurrentCinemaReducer';
import currentMovieReducer from './CurrentMovieReducer';
import cinemaMovieReducer from './CinemaMovieReducer';
import currentMovieShowtimesReducer from './CurrentMovieShowtimesReducer';
import upcomingMoviesReducer from './UpcomingMoviesReducer';
import currentUpcomingMovieReducer from './CurrentUpcomingMovieReducer';
import currentTrailerReducer from './CurrentTrailerReducer';
// STATE IS PORTIONED WITH MULTIPLE REDUCERS
export default combineReducers({
    cinemaReducer:cinemaReducer,
    tokenReducer:tokenReducer,
    currentCinemaReducer: currentCinemaReducer,
    currentMovieReducer: currentMovieReducer,
    cinemaMovieReducer: cinemaMovieReducer,
    currentMovieShowtimesReducer: currentMovieShowtimesReducer,
    upcomingMoviesReducer: upcomingMoviesReducer,
    currentUpcomingMovieReducer: currentUpcomingMovieReducer,
    currentTrailerReducer: currentTrailerReducer

});
