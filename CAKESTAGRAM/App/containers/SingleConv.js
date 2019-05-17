import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../theme/styles';

import { ListItem } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler"; 

class SingleConv extends Component {

    render() {
        console.log("LAST", this.props)
     /* const { conv } = this.props */

        return (
        <View>
          <Text>  {this.props.conv.user.last_name}</Text>
        </View>

          )
        }  
}

export default SingleConv;