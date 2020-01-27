import { combineReducers } from 'redux';
import actionGuide from '../reducers/guide/GuideReducer.js'
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  guides: actionGuide,
})

export default rootReducer;