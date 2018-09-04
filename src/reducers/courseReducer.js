import *  as types from '../actions/actionTypes';
import initalState from './initalState';

export default function courseReducer(state = initalState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
          return action.courses;
          default:
           return state;
    }

}