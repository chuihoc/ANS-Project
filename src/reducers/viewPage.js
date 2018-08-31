import { UPDATE_DATA } from '../constants/actionTypes';
import dataTemp from '../ViewPage/Data';

let initialState = {
  data: dataTemp
};

const viewPage = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
export default viewPage;