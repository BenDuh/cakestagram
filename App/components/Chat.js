import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getMessagesRequest } from '../redux/reducers/chatReducer'
import { connect } from 'react-redux'

class Chat extends Component {
  componentDidMount() {
    const conversationId = this.props.navigation.getParam('conversationId', null)
    this.props.getMessagesRequest(conversationId)
  }

  render() {
    console.log('props Chat', this.props)

    return (
      <View>
        <Text>{JSON.stringify(this.props.messages)}</Text>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    messages: state.chat.messages
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    getMessagesRequest: (conversationId) => dispatch(getMessagesRequest(conversationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)