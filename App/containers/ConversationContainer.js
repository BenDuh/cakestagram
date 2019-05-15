import React, { Component } from 'react';
import { Button,Text, View } from 'react-native' 
import {connect} from 'react-redux'
import {getConvRequest} from '../redux/reducers/conversationReducer'
import { FlatList } from 'react-native-gesture-handler';

class ConversationContainer extends Component { 
    componentDidMount(){
        this.props.getConv()
    }
    toLogin = () =>{
        console.log('conversation props', this.props.conversation[1])
    }
    render() {
        return (
            <View>
                <Text>fsqfd</Text>
                <Button
                title="Login"
<<<<<<< HEAD
                onPress={this.props.getConv}/>
                <FlatList
                data={this.props.conversation}
                renderItem={({item}) => <Text>{item.last}</Text>}
                />
            </View>
=======
                onPress={this.toLogin}/>
            </View>  
>>>>>>> master
        );
    }
}

const mapStateToProps = (state)=>{
    return{
      conversation : state.conversationReducer.conversation
    }
}
const mapDispatchToProps = {
getConv: getConvRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(ConversationContainer);