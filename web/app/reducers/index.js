import { combineReducers } from 'redux'
import counter from './counter'
import { sitesReducer, sitesByIdReducer } from './sites'
import { REQUEST_DATA, RECEIVE_DATA } from '../actions';


const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return true
    case RECEIVE_DATA:
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter,
  isFetching,
  sites: sitesReducer,
  sitesById: sitesByIdReducer

});

export default rootReducer;
