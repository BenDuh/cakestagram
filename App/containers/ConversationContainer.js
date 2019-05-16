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
      
     <Button
     title={item.user.last_name}
     onPress={() => navigation.navigate('Chat', {conversation: item})}
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
