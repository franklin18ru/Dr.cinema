import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GET_CURRENT_MOVIE:
            return {...state, ['movie']:action.payload}
        default: 
            return state
    }
}