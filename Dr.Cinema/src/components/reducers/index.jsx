import { combineReducers } from 'redux';
// IMPORT REDUCERS HERE
import exampleReducer from './ExampleReducer';

// STATE IS PORTIONED WITH MULTIPLE REDUCERS
export default combineReducers({
    exampleReducer:exampleReducer,
});