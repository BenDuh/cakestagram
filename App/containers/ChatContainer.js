import React, { Component } from 'react'

import Chat from '../components/Chat'

class ChatContainer extends Component {
  render() {
    console.log('props ChatContainer', this.props)
    const { navigation } = this.props

    return (
      <Chat navigation={navigation} />
    )
  }
}

export default ChatContainer