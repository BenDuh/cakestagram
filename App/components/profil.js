import React, { Component } from 'react';
import { View, Text } from 'react-native'
import moment from 'moment'
import { Avatar } from 'react-native-elements';
import { Divider } from 'react-native-elements';

class Profil extends Component {

    render() {
        console.log(this.props.user)


        return (
            <View>
                <View>
                    {this.props.user ? (
                        <Text>Nom:{this.props.user.last_name}</Text>
                        
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                <View>
                    {this.props.user ? (
                        <Text>Prénom: {this.props.user.first_name}</Text>
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                <View>
                    {this.props.user ? (
                        <Text>Mail: {this.props.user.email}</Text>
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                <View>
                    {this.props.user ? (
                        <Text>Votre compte a été crée le: {moment(this.props.user.created_at).calendar()}</Text>
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                <View>
                    {this.props.user ? (
                        <Text>Dernière modifications: {moment(this.props.user.updated_at).calendar()}</Text>
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                <View>
                    {this.props.user ? (
                        <Avatar
                        rounded
                        source={this.props.user.avatar}
                    />
                    ) : (
                            <Text>No current user !</Text>
                        )}
                        
                </View>
                

            </View>

        );
    }
}

export default Profil;