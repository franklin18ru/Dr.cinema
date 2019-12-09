import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GET_MOVIE_SHOWTIMES:
            return {...state, ['showtimes']:action.payload}
        default: 
            return state
    }
}