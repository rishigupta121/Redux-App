import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// we combine them with combine reducer library
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId:SelectionReducer
});