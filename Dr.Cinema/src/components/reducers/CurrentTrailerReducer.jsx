import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GET_CURRENT_TRAILER:
            return {...state, ['trailer']:action.payload}
        default: 
            return state
    }
}