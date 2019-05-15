import React, { Component } from 'react';
import { Button, Text, View } from 'react-native'

class LoginContainer extends Component {

    toHome = () => {
        const bonjour = {
            bonjour: 'bonjour'
        }
        this.props.navigation.navigate('Home', bonjour)
    }
    render() {
        return (
            <View>
                <Text>FDQSJFD</Text>
                <Button
                    title="Home"
                    onPress={this.toHome} />
            </View>
        );
    }
}

export default LoginContainer;