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
  const{ navigation, conversation }= this.props
  console.log("requette", this.props)

  return (
    <View>
    <FlatList
    //necessaire key avec tostring car string attendu
    keyExtractor={(item)=>(item.id).toString()}
    data={conversation}
    renderItem={
      ({item}) => 
      <Text containerStyle={{ position: 'absolute', top: -4, right: -4 }}>
      {item.user.last_name} 
      {item.last_message.text}
</Text>}
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
