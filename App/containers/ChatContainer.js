import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { getMessagesRequest, getMessages, postMessage } from '../redux/reducers/chatReducer'
import { connect } from 'react-redux'

import { Formik } from 'formik'
import Form from '../components/form'
import ChatInput from '../components/ChatInput'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import Message from '../components/Message'

class ChatContainer extends Component {
  // Va chercher l'id de la conversation dans les paramètres de navigation, puis get les messages
  componentDidMount() {
    this.conversation = this.props.navigation.getParam('conversation', null)
    this.user = this.props.navigation.getParam('user', null)
    
    this.user_id = this.conversation ? this.conversation.user.id : this.user.id

    // TEMPORAIRE EN ATTENDANT DE FAIRE LA CONVERSATION INSTANTANÉE
    this.props.getMessagesRequest(this.user_id)
    this.getMessagesInterval = setInterval(() => this.props.getMessagesRequest(this.user_id), 3000)
  }

  static navigationOptions =({navigation})=>{
    const conversation = navigation.getParam('conversation', null)
    const user = navigation.getParam('user', null)
    const first_name = conversation ? conversation.user.first_name : user.first_name

    return {title: first_name}
  }

  // Supprime les messages du store, sinon quand on va sur une autre discussion on voit brievement ces messages
  // / ! \ Du coup quand on fait "retour" il y a un truc qui s'affiche brièvement
  componentWillUnmount() {
    this.props.deleteMessages()

    // TEMPORAIRE EN ATTENDANT DE FAIRE LA CONVERSATION INSTANTANÉE
    clearInterval(this.getMessagesInterval)
  }

  // Envoi un message
  onSubmit = (e, { resetForm }) => {
    const { text } = e
    this.props.postMessage(this.user_id, text)
    resetForm()
  }

  // Render d'un message de la Flatlist
  renderMessage = (item) => {
    const id = item.user.id
    const textAlign = id === this.user_id ? 'left' : 'right'
    return (
      <Message message={item} textAlign={textAlign} />
    )
  }

  render() {
    const { messages } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {messages &&
          <FlatList
            inverted={true}
            data={messages}
            renderItem={({ item }) => this.renderMessage(item)}
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
    getMessagesRequest: (user_id) => dispatch(getMessagesRequest(user_id)),
    deleteMessages: () => dispatch(getMessages(null)),
    postMessage: (user_id, text) => dispatch(postMessage(user_id, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)