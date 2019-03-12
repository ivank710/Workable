import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import uiReducer from './ui_reducer';
import JobsReducer from './jobs_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  ui: uiReducer,
  jobs: JobsReducer
});

export default RootReducer;