import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-elements';

class ConversationContainer extends Component {
  componentDidMount() {
    this.props.getConv();
  }
  /*     toLogin = () =>{
        this.props.navigation.navigate('Login')
    } */

  render() {
    console.log("conversation props", this.props.conversation);
    console.log("autre", this.props.last_message);
    const { navigation } = this.props

    return (
      <View style={{ alignItems: 'center'}}>
        <Text>Conversations</Text>

        <FlatList
          data={this.props.conversation}
          renderItem={({ item }) =>
            <Button
              title={item.id ? item.id.toString() : 'Pas de conversation'}
              onPress={item.id ? () => navigation.navigate('Chat', { conversationId: item.id }) : console.log('Clique pas, il y a pas de conv')}
              buttonStyle={{ backgroundColor: '#2bcbba', width: 200, marginBottom: 20 }}
            />
          }
        />

        <Button
          title='New conversation'
          onPress={() => navigation.navigate('Users')}
          buttonStyle={{ backgroundColor: '#2bcbba', width: 200, marginBottom: 20 }}
        />
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
