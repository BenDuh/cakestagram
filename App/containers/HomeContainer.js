import React, { Component } from 'react';
import { FlatList } from 'react-native'
import SinglePost from './SinglePost';
import { getPostRequest } from '../redux/reducers/homeReducer'
//APISAUCE
import { connect } from 'react-redux';

class HomeContainer extends Component {
    componentDidMount() {
        this.props.getPostRequest();
    }

    _renderPost = ({item}) => (
        <SinglePost post={item} id={item.id} />
    )

    render() {
        console.log(this.props);
        console.log("mon post : ", this.props.posts[0]);

        const listOfPosts = this.props.posts.map((singlePost) =>
            <SinglePost post={singlePost} key={singlePost.id} />
        )

        return (
            <FlatList
                data={this.props.posts}
                keyExtractor={(item) => `${item.id}`}
                renderItem={this._renderPost}
            />
        );
    }
}

mapStateToProps = (state) => {
    return {
        posts: state.home.posts
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        getPostRequest: () => dispatch(getPostRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);