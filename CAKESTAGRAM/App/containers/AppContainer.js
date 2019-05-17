import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from '../redux'
import RootContainer from './RootContainer';

class AppContainer extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default AppContainer

