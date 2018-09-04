import { UPDATE_DATA, DELETE_ITEM } from '../constants/actionTypes';
import dataTemp from '../ViewPage/Data';

let initialState = {
  data: dataTemp,
  isFeching: false
};

const viewPage = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
        isFeching: !state.isFeching
      }
    case DELETE_ITEM:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
export default viewPage;