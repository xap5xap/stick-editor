import initialValueAsJson from '../utils/mainEditorInitialValue.json';
import { GET_EDITOR_VALUE_SUCCESS } from './types.js';

export const getEditorValue = () => {
  return dispath => {
    //should query the server API for the value
    dispath({ type: GET_EDITOR_VALUE_SUCCESS, payload: initialValueAsJson });
  };
};
