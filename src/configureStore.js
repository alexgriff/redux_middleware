import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import reducer from './reducers/root'


const configureStore = () => {

  const store = createStore(reducer)

  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default configureStore
