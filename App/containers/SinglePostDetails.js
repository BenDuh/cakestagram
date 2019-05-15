import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SinglePost from './SinglePost';

class SinglePostDetails extends Component {
    render() {
        //pour récupérer les props avec navigation il faut les récupérer dans getParam
        //premier argument la props, le deuxième c'est si il ne trouve pas la props
        const recupPost = this.props.navigation.getParam('post', 'Pas de post')

        return (
            <SinglePost post={recupPost} withComments={true} />
        );
    }
}

export default SinglePostDetails;