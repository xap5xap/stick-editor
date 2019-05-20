import { GET_EDITOR_VALUE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  editorValue: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EDITOR_VALUE_SUCCESS:
      return { ...state, editorValue: { ...action.payload } };
    default:
      return state;
  }
};
