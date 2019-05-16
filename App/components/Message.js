import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

const Message = ({ message }) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text>{`${message.user.first_name} ${message.user.last_name} (id: ${message.user.id})`}</Text>
      <Text>{moment(message.created_at).calendar()}</Text>
      <Text>{message.text}</Text>
    </View>
  )
}

export default Message