import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GET_CURRENT_CINEMA:
            return {...state, ['cinema']:action.payload}
        default: 
            return state
    }
}