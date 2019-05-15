import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";

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
    return (
      <View>
        <Text>Conversations</Text>
        
        <FlatList
          data={this.props.conversation}
          renderItem={({ item }) => <Text>{item.id}</Text>}
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
