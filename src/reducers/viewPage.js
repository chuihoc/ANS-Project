import { UPDATE_DATA, DELETE_ITEM, ADD_ITEM, EDIT_ITEM } from '../constants/actionTypes';
import dataTemp from '../ViewPage/Data';

let initialState = {
  data: dataTemp,
  isFetching: false
};

const viewPage = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: !state.isFetching
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        data: action.payload
      };
    case EDIT_ITEM:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export default viewPage;