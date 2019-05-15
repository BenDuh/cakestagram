import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import moment from 'moment' // Pour formatter les dates

const imgBase = "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg";

class SinglePost extends Component {
    render() {
        let { width } = Dimensions.get('screen');
        const { post } = this.props
        //console.log(this.props.post);
        const uriAvatar = post ? this.props.post.owner.avatar : imgBase
        const avatar = <Avatar rounded source={{uri: uriAvatar}} />

        const uri = post ? this.props.post.thumb : imgBase
        const image = <Image source={{ uri }} style={{ height: 200, width: width }} />

        const ownerFirstname = post ? this.props.post.owner.first_name : "Vide"

        const dateCreation = post ? moment(post.created_at).calendar() : "Date"
        
        return (
            <View>
                {avatar}
                <Text>{ownerFirstname}</Text>
                <Text>{dateCreation}</Text>
                {image}
                <Icon 
                    name="rowing"
                />
            </View>
        );
    }
}

export default SinglePost;