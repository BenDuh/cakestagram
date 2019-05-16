import React from 'react';
import { Button,Text, View } from 'react-native' 
import {connect} from 'react-redux'
import { getMyAccountRequest } from '../redux/reducers/myAccountReducer'
import Profil from '../components/profil'

class MyAccountContainer extends React.Component {
    componentDidMount(){
        this.props.getMyAccount()
        
    }
    
    render() {
        console.log(this.props)
        return (
            <View>
                <Profil user={this.props.account}/>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        account: state.myAccountReducer.account
    }
}
const mapDispatchToProps = {
    getMyAccount: getMyAccountRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountContainer);