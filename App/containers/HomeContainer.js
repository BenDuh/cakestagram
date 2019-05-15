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
        <SinglePost post={item} id={item.id} navigation={this.props.navigation} withComments={false} />
    )

    render() {
        console.log(this.props);

        return (
            // SI ON A LE TEMPS OPTIMISER AVEC scrollToItem() et getItemLayout
            <FlatList
                data={this.props.posts.reverse()}
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