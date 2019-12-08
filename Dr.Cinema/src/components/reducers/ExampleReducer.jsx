import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.EXAMPLE_ACTION:
            return {...state, ['data']:action.payload}
        default: 
            return state
    }
}