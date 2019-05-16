import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { getUserRequest } from "../redux/reducers/userReducer";
import { FlatList } from 'react-native-gesture-handler';

class UserContainer extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  /*     toLogin = () =>{
        this.props.navigation.navigate('Login')
    } */

  render() {
    const{ navigation, user }= this.props
    return (
      <View>
        <Text>Les utilisateurs</Text>
        {/*   <Button title="Find Users" onPress={this.props.getUser} /> */}
        <FlatList
          data={user}
          renderItem={({ item }) => <Text>{item.last_name}</Text>} />
          <Button
          title="oui"
    onPress={() => navigation.navigate('Chat')}
    buttonStyle={{ backgroundColor: '#2bcbba', width: 200, marginBottom: 20 }}
/>
      </View>
    );
  }
}

const mapStateToProps = state => {
   
  return {
    user: state.userReducer.user
  };
};
const mapDispatchToProps = {
  getUser: getUserRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
