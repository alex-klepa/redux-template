import { RECEIVE_DATA } from '../actions';


export const sitesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return [ ]
    default:
      return state
  }
}

export const sitesByIdReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      // return action.payload.reduce((items, item) => {
      //   items[item.id] = item
      //   return items
      // }, {})
      []
    default:
      return state
  }
}

