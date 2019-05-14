import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Button } from 'react-native';
//APISAUCE
import { connect } from 'react-redux';
//import action qui lance la saga
import { getPostRequest } from '../redux/reducers/homeReducer'


const imgBase = "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg";

class SinglePost extends Component {
    componentDidMount() {
        this.props.getPostRequest();
    }

    render() {
        let { width } = Dimensions.get('screen');
        const { post } = this.props
        console.log(this.props);

        const uri = post ? this.props.post.thumb : imgBase
        const image = <Image source={{ uri }} style={{ height: 200, width: width }} />

        return (
            <View>
                {/* <Image source={{ uri: this.state.avatar }} style={{ height: 50, width: 50 }} /> */}
                <Text>Nom utilisateur</Text>
                <Text>Date</Text>

                {image}

                {/* <Button
                    title='Test'
                    onPress={this.like}
                /> */}

            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        post: state.home.post
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        getPostRequest: () => dispatch(getPostRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);