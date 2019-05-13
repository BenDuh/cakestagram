import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from '../redux'
import TestContainer from './TestContainer'

class AppContainer extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <TestContainer />
      </Provider>
    )
  }
}

export default AppContainer

