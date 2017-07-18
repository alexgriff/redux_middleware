import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './App'
import reducer from './reducers/root'


const configureStore = () => {

  const diyThunk = ({dispatch}) => next => action => {
    console.log('in the middleware');
    console.log('next', next);
    if (typeof action === 'function') {
      action(dispatch)
    } else {
      next(action)
    }

  }



  const store = createStore(reducer, applyMiddleware(diyThunk))

  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default configureStore
