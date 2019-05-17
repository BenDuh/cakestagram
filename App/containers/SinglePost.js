import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Image, Card, ListItem } from 'react-native-elements';
//import des icons de font-awesome
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from '../theme/styles';
import moment from 'moment' // Pour formatter les dates
/********* TEST *********/
import { connect } from 'react-redux';
import { getCommentsRequest } from '../redux/reducers/commentsReducer'
/********* FIN TEST *********/


const imgBase = "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg";

class SinglePost extends Component {
    componentDidMount() {
        const myId = this.props.post.id
        this.props.getCommentsRequest(myId);
    }

    goToSinglePostDetail = (post) => {
        post = this.props.post
        this.props.navigation.navigate('Commentdetail', { post })
    }

    clickLike = () => {

    }

    displayComments = () => {
        if (this.props.comments.length > 0) {
            for (let i = 0; i < this.props.comments.length; i++) {
                if (this.props.comments[i].post_id == this.props.post.id) {
                    return (
                        <View>
                            {
                                this.props.comments.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        leftAvatar={{ source: { uri: item.owner.avatar_thumb } }}
                                        title={item.owner.first_name}
                                        subtitle={item.text}
                                    />
                                ))
                            }
                        </View>
                    )
                } else {
                    <Text>Soyez le premier à écrire un commentaire</Text >
                }
            }
        }
    }

    showComments = () => {
        //{this.props.comments[0].text}
        const commentsShow = (this.props.comments.length > 0) ? <View>{this.displayComments()}</View> : <Text></Text>
        return (
            <View>
                <Text>Commentaires de la photo :</Text>
                {commentsShow}
            </View>
        )
    }

    render() {
        const { post } = this.props
        const uriAvatar = post ? post.owner.avatar : imgBase
        const avatar = <Avatar rounded source={{ uri: uriAvatar }} containerStyle={styles.singlePostAvatar} />

        // Si il y a un post, récupérer l'uri de son .thumb. Si il n'y a pas de .thumb, on prend le .attachment (à priori plus lourd)
        const uri = post ? (post.thumb ? post.thumb : post.attachment) : imgBase
        const image = <Image source={{ uri }} style={{ height: 200 }} resizeMode="cover" />

        const ownerFirstname = post ? post.owner.first_name : "Vide"

        const dateCreation = post ? moment(post.created_at).calendar() : "Date"

        const like = post.likes_by_me ?
            <Icon
                name="heart"
                type="font-awesome"
                style={{ margin: 10 }}
                size={20}
                solid
                onPress={this.clickLike} />
            :
            <Icon
                name="heart"
                type="font-awesome"
                style={{ margin: 10 }}
                size={20}
                regular
                onPress={this.clickLike} />

        const comment = post.comments_count ?
            <Icon name="comment" type="font-awesome" style={{ margin: 10 }} size={20} solid onPress={this.goToSinglePostDetail} />
            :
            <Icon name="comment" type="font-awesome" style={{ margin: 10 }} size={20} regular onPress={this.goToSinglePostDetail} />

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
                {this.props.withComments ? this.showComments() : <Text></Text>}
            </Card>

        );
    }
}


/**********************************************************/
mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        getCommentsRequest: (myId) => dispatch(getCommentsRequest(myId))
    }
}

//export default SinglePost;
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);