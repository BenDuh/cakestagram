import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Image, Card } from 'react-native-elements';
//import des icons de font-awesome
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from '../theme/styles';

const imgBase = "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg";

class SinglePost extends Component {
    goToSinglePostDetail = (post) => {
        post = this.props.post
        console.log("COOKIE", post)
        this.props.navigation.navigate('Commentdetail', { post })
    }

    clickLike = () => {
        
    }

    render() {
        console.log("props render single post", this.props)
        const { post } = this.props
        const uriAvatar = post ? this.props.post.owner.avatar : imgBase
        const avatar = <Avatar rounded source={{ uri: uriAvatar }} containerStyle={styles.singlePostAvatar} />

        const uri = post ? post.thumb : imgBase
        const image = <Image source={{ uri }} style={{ height: 200 }} resizeMode="cover" />

        const ownerFirstname = post ? post.owner.first_name : "Vide"

        const dateCreation = post ? this.props.post.created_at : "Date"

        const like = post.likes_count ?
            <Icon
                name="heart"
                type="font-awesome"
                style={{ margin: 5 }}
                size={20}
                regular
                onPress={this.clickLike} />
            :
            <Icon
                name="heart"
                type="font-awesome"
                style={{ margin: 5 }}
                size={20}
                solid
                onPress={this.clickLike} />

        const comment = post.comments_count ?
            <Icon name="comment" type="font-awesome" style={{ margin: 5 }} size={20} solid onPress={this.goToSinglePostDetail} />
            :
            <Icon name="comment" type="font-awesome" style={{ margin: 5 }} size={20} regular onPress={this.goToSinglePostDetail} />

        return (
            <Card>
                <View style={styles.singlePost}>
                    {avatar}
                    <View style={styles.singlePostHeader}>
                        <Text style={styles.singlePostUser}>{ownerFirstname}</Text>
                        <Text style={styles.singlePostDate}>{dateCreation}</Text>
                    </View>
                </View>
                {image}
                <View style={styles.singlePost}>
                    {like}
                    {comment}
                </View>
                {this.props.withComments ? <Text>Afficher les commentaires</Text> : <Text></Text>}
            </Card>

        );
    }
}


export default SinglePost;