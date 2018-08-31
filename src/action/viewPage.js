import { UPDATE_DATA } from '../constants/actionTypes';

export const updateData = (data) => {
  return {
    type: UPDATE_DATA,
    payload: data
  }
}