import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

const Message = ({ message, textAlign }) => {
  // Pour afficher message court plus gros (e.g. just un emoji)
  const fontSize = message.text.length <= 2 ? 50 : 30

  return (
    <View style={{ paddingBottom: 20 }}>

      {/* NOM DU USER */}
      {/* <Text style={{ fontSize: 20, textAlign }}>
        {`${message.user.first_name} ${message.user.last_name} (id: ${message.user.id})`}
      </Text> */}

      {/* DATE D'ENVOI */}
      <Text style={{ textAlign }}>
        {moment(message.created_at).calendar()}
      </Text>

      {/* MESSAGE */}
      <Text style={{ fontSize, textAlign }}>
        {message.text}
      </Text>

    </View>
  )
}

export default Message