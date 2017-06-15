import fetch from 'isomorphic-fetch'


export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const REMOTE_RESPONSE = 'REMOTE_RESPONSE'

export const API_ENDPOINT = '/redux'


const receiveData = (data) => {
  return {
    type: RECEIVE_DATA,
    payload: data
  }
}

const requestData = () => {
  return {
    type: REQUEST_DATA
    
  }
}

const fetchData = () => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`${API_ENDPOINT}/data.json`, { credentials: 'include' })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveData(json))
        // dispatch(setSites(json))
      })
  }
}

const shouldFetchData = (state) => {
  return state.isFetching !== true
}

export const fetchDataIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData())
    }
  }
}


// const processResponse = (json) => {
//   return {
//     type: REMOTE_RESPONSE,
//     payload: json
//   }
// }
