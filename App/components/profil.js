import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import { Avatar } from 'react-native-elements';
import { Divider } from 'react-native-elements';

class Profil extends Component {

    render() {
        return (
            <View>
                <View>
                    {this.props.user ? (
                        <View>
                            <Avatar rounded source={{ uri: this.props.user.avatar }}
                            />
                            <Text>Nom: {this.props.user.last_name}</Text>
                            <Text>Prénom: {this.props.user.first_name}</Text>
                            <Text>Mail: {this.props.user.email}</Text>
                            <Text>Votre compte a été crée le: {moment(this.props.user.created_at).calendar()}</Text>
                            <Text>Dernière modifications: {moment(this.props.user.updated_at).calendar()}</Text>

                        </View>

                    ) : (
                            <Text>No current user !</Text>
                        )}
                </View>
            </View>

        );
    }
}

export default Profil;