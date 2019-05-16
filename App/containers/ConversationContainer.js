import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-elements';
import ListConversation from '../components/ListConversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.props.getConv();
}

render() {
  
  return (
    <FlatList
    data={this.props.conversation}
    renderItem={
      ({item}) => 
      
      <Text containerStyle={{ position: 'absolute', top: -4, right: -4 }}>
      {item.user.last_name} 
      {item.last_message.text}
</Text>}
  />

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
