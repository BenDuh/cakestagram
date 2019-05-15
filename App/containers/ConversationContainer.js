import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";


class ConversationContainer extends Component {
  componentDidMount() {
    this.props.getConv();
  }

 /* render() {
  render() {
    console.log("conversation props", this.props.conversation);
    console.log("autre", this.props.last_message);
    const { navigation } = this.props

    return (
    
      <View>
        <Text>Conversations</Text>
      
        <FlatList
          style={Styles.FlatList}
          data={this.props.conversation}
          renderItem={({ item }) => <Text>{item.last_message.text}</Text>}
          renderItem={({ item }) => 
            <Button
              title={item.id ? item.id.toString() : 'Pas de conversation'}
              onPress={item.id ? () => navigation.navigate('Chat', { conversationId: item.id }) : console.log('Clique pas, il y a pas de conv')}
            />
          }
        />

        <Button
          title='New conversation'
          onPress={() => navigation.navigate('Users')}
        />
      </View>
    );
  }
} 
 */

displayRealmessages=(item)=>{
  console.log(item);
 if(item.last_message.text!=null)
 {<Text>
   {item.last_message.text}
   </Text>
  } else {
  console.log(item)
  }
}

render(){

  return (
    
  <View>
        <Text>Conversations</Text>
      
        <FlatList
          data={this.props.conversation}
          renderItem={(item)=>this.displayRealmessages(item)}
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
