import { UPDATE_DATA, DELETE_ITEM, ADD_ITEM, EDIT_ITEM } from '../constants/actionTypes';

export const updateData = data => {
  return {
    type: UPDATE_DATA,
    payload: data
  }
};

export const deleteItem = dataItem => (dispatch, getState) => {
  const state = getState();
  const temp = [...state.viewPage.data];
  const result = temp.filter(item => item !== dataItem);
  dispatch({
    type: DELETE_ITEM,
    payload: result
  })
};

export const addItem = dataItem => (dispatch, getState) => {
  const state = getState();
  const temp = [dataItem, ...state.viewPage.data];
  dispatch({
    type: ADD_ITEM,
    payload: temp
  })
};

export const editItem = newData => (dispatch, getState) => {
  dispatch({
    type: EDIT_ITEM,
    payload: newData
  })
};