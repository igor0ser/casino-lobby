// import preloadedState from './preloadedState';
//import { ADD_CITY, REMOVE_CITY, SIGN_IN } from '../actions/actionTypes';
import tableList from '../fakeApi/tableList';

const preloadedState = tableList();
console.log(preloadedState);

const tablesReducer = (state = preloadedState, action) => {
  switch (action.type) {
/*    case ADD_CITY:
      if (state.find(({ id }) => id === action.payload.id)) {
        return state;
      }
      return [action.payload, ...state];
    case REMOVE_CITY:
      return state.filter(({ id }) => id !== action.payload);*/
    default:
      return state;
  }
};

export default tablesReducer;
