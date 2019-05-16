import React from 'react'
import { View, Text } from 'react-native'

const Message = ({ message }) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text>{`${message.user.first_name} ${message.user.last_name} (id: ${message.user.id})`}</Text>
      <Text>{message.text}</Text>
    </View>
  )
}

export default Message