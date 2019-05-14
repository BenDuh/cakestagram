import React, { Component } from 'react';
import { Button,Text, View } from 'react-native' 
import SinglePost from './SinglePost';

class HomeContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <View>
                <Text>Fil d'actualité</Text>
                <SinglePost />
            </View>
        );
    }
}

export default HomeContainer;