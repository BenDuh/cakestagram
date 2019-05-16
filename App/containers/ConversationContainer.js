import React, { Component } from "react";
<<<<<<< HEAD
import { Button, Text, View, StyleSheet } from "react-native";
=======
import { Text, View } from "react-native";
>>>>>>> master
import { connect } from "react-redux";
import { getConvRequest } from "../redux/reducers/conversationReducer";
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-elements';


class ConversationContainer extends Component {
  componentDidMount() {
    this.props.getConv();
  }

 /* render() {
    return (
      <View style={{ alignItems: 'center'}}>
        <Text>Conversations</Text>
      

        <FlatList
          style={Styles.FlatList}
          data={this.props.conversation}
          renderItem={({ item }) => <Text>{item.last_message.text}</Text>}
          renderItem={({ item }) => 
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
 */
/* 
displayRealmessages=(item)=>{
  console.log(item);
 if(item.last_message.text!=null)
 {<Text>
   {item.last_message.text}
   </Text>
  } else {
  console.log(item)
  }
} */

render(){
console.log('fdsqsfd',this.props.conversation.length)
  return (
    
  <View>
        <Text>Conversations</Text>

        <FlatList
          data={this.props.conversation}
          renderItem={({item}) => {
            console.log('item', item.user)
  return (<Text>{item.id}</Text>)}}
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
