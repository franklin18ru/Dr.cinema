import * as constants from '../constants';

export const ExampleAction = (data) => {
        return {
            type: constants.EXAMPLE_ACTION,
            payload: data
        }
};