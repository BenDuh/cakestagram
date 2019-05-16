import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { getMessagesRequest, getMessages } from '../redux/reducers/chatReducer'
import { connect } from 'react-redux'

import { Formik } from 'formik'
import Form from '../components/form'
import ChatInput from '../components/ChatInput'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Message from '../components/Message'

class ChatContainer extends Component {
  // Va chercher l'id de la conversation dans les paramètres de navigation, puis get les messages
  componentDidMount() {
    const conversationId = this.props.navigation.getParam('conversationId', null)
    this.props.getMessagesRequest(conversationId)
  }

  // Supprime les messages du store, sinon quand on va sur une autre discussion on voit brievement ces messages
  // / ! \ Du coup quand on fait "retour" il y a un truc qui s'affiche brièvement
  componentWillUnmount() {
    this.props.deleteMessages()
  }

  // Envoi un message
  onSubmit = (e) => {
    const { text } = e
    console.log(text)
  }

  render() {
    console.log('props Chat', this.props)
    const { messages } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {messages &&
          <FlatList
            inverted={true}
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            keyExtractor={(item) => `${item.id}`}
          />}
        </View>

        <Formik
          initialValues={{ text: '' }}
          onSubmit={this.onSubmit}
        >
          {
            ({ handleChange, values, handleSubmit, ...props }) => {
              return (
                <Form style={{ paddingBottom: 5 }}>
                  <ChatInput
                    placeholder="Aa"
                    name="text"
                    type="text"
                    rightIcon={
                      <Icon
                        name="paper-plane"
                        type="font-awesome"
                        size={25}
                        solid
                        onPress={handleSubmit}
                      />
                    }
                  />
                </Form>
              )
            }
          }
        </Formik>

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
    getMessagesRequest: (conversationId) => dispatch(getMessagesRequest(conversationId)),
    deleteMessages: () => dispatch(getMessages(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)