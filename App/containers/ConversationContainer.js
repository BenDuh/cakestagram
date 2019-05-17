import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";
import { Button, ListItem } from 'react-native-elements';
import ListConversation from '../components/ListConversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.props.getConv();
  }

  render() {
    const { navigation, conversation } = this.props
    console.log("requette", this.props)

    return (
      <View style={{ flex: 1 }}>

        {/* LISTE DES CONVERSATIONS */}
        <View style={{ flex: 1 }}>
          <FlatList
            //necessaire key avec tostring car string attendu
            keyExtractor={(item) => (item.id).toString()}
            data={conversation}
            renderItem={
              ({ item }) => {
                let croppedMessage = ''

                // Il me semble que si on fait un get d'une conversation avec un user alors qu'on en a pas, ça crée une conversation vide
                // Du coup c'est possible que 'last_message' soit null, dans ce cas on affiche pas la conversation
                if (item.last_message) {
                  const msg = item.last_message.text
                  const maxLength = 40
                  croppedMessage = msg.length > maxLength ? `${msg.slice(0, maxLength)}...` : msg
                } else {
                  return null
                }

                return (
                  <ListItem
                    key={item.id}
                    leftAvatar={{ source: { uri: item.user.avatar_thumb } }}
                    title={item.user.first_name}
                    subtitle={croppedMessage}
                    onPress={() => navigation.navigate('Chat', { conversation: item })}
                  />
                )
              }
            }
          />
        </View>

        {/* NOUVELLE CONVERSATION */}
        <View style={{ alignItems: 'center' }}>
          <Button
            title='New conversation'
            onPress={() => navigation.navigate('Users')}
            buttonStyle={{ backgroundColor: '#2bcbba', width: 200, marginBottom: 10, marginTop: 10 }}
          />
        </View>
      </View>
    );
  }
}




const mapStateToProps = state => {
  return {
    conversation: state.conversationReducer.conversation
  };
};
const mapDispatchToProps = {
  getConv: getConvRequest
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationContainer);
