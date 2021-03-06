import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GET_TOKEN:
            return {...state, ['token']:action.payload}
        default: 
            return state
    }
}