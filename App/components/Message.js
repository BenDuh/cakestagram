import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

const Message = ({ message }) => {
  // Pour afficher message court plus gros (e.g. just un emoji)
  textSize = message.text.length <= 2 ? 50 : 30

  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={{ fontSize: 20 }}>
        {`${message.user.first_name} ${message.user.last_name} (id: ${message.user.id})`}
      </Text>

      <Text>
        {moment(message.created_at).calendar()}
      </Text>

      <Text style={{ fontSize: textSize }}>
        {message.text}
      </Text>
    </View>
  )
}

export default Message