import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { getUserRequest } from "../redux/reducers/userReducer";
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'

class UserContainer extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  // Normalement on devrait pas avoir besoin de ça, ça devrait afficher le titre qui est dans NavigationApp
  static navigationOptions = {
    title: 'Users'
  }

  render() {
    const { navigation, user } = this.props;
    console.log('user in UserContainer', user)

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={user}
          renderItem={({ item }) => {
            return (
                <ListItem
                  key={item.id}
                  leftAvatar={{ source: { uri: item.avatar_thumb } }}
                  title={`${item.first_name} ${item.last_name}`}
                  onPress={() => navigation.navigate('Chat', { user: item })}
                />
            )
          }}
          keyExtractor={item => item.id.toString()}
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
