import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './App'
import reducer from './reducers/root'


const configureStore = () => {

  const store = createStore(reducer, applyMiddleware(reduxThunk))

  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default configureStore
