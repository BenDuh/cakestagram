import React, { Component } from 'react';
import { Button,Text, View } from 'react-native' 
import {connect} from 'react-redux'
import {testAppRequest} from '../redux/reducers/applicationReducer'

class TestContainer extends Component {
    toLogin = () =>{
        this.props.navigation.navigate('Login')
    }
    render() {
        const { boss, getBoss } = this.props
        console.log(this.props)
        return (
            <View>
                <Text>{boss}</Text>
                <Button
                title="Press Me"
                onPress={getBoss}/>
                <Button
                title="Login"
                onPress={this.toLogin}/>
            </View>
                
            
        );
    }
}

const mapStateToProps = (state)=>{
    return{
      boss : state.reducer.boss
    }
}
// const mapDispatchToProps = (dispatch) => {
//      return {
//         getBoss: () => dispatch(testAppRequest())
//      }
//     }
const mapDispatchToProps = {
getBoss: testAppRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(TestContainer);