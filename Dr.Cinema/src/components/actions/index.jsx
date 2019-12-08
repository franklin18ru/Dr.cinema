import * as constants from '../constants';

export const GetToken = (token) => {
    return {
        type: constants.GET_TOKEN,
        payload: token
    }
};

export const GetCinemas = (cinemas) => {
    return {
        type: constants.GET_CINEMAS,
        payload: cinemas
    }
};

export const GetCurrentCinema = (cinema) => {
    return {
        type: constants.GET_CURRENT_CINEMA,
        payload: cinema
    }
};

export const GetCurrentMovie = (movie) => {
    return {
        type: constants.GET_CURRENT_MOVIE,
        payload: movie
    }
};

export const GetCinemasMovies = (movies) => {
    return {
        type: constants.GET_CINEMA_MOVIES,
        payload: movies
    }
};
