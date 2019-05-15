import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import LoginContainer from "../containers/LoginContainer";
import TestContainer from "../containers/TestContainer";
import HomeContainer from "../containers/HomeContainer";
import ConversationContainer from "../containers/ConversationContainer";
import SignupContainer from "../containers/SignupContainer";
import UserContainer from '../containers/UserContainer'; 
import ChatContainer from "../containers/ChatContainer";

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            title: 'Login'
        }
        },
    Signup:{
        screen: SignupContainer,
        navigationOptions:{
            title:'Signup'
        }
    },
    Test: {
        screen: TestContainer,
        navigationOptions: {
            title: 'Test'
        }
    }
    }, {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
})

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            title: 'Home'
        }
        },
    Conversation : {
        screen: ConversationContainer,
        navigationOptions: {
            title: 'Conversation'
        }
        },
    Users : {
        screen: UserContainer,
        navigationOptions: {
            title: 'Users'
        }
    },
    Chat: {
        screen: ChatContainer,
        nagigationOptions: {
            title: 'Chat'
        }
    }
    },
    {    
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
})

const AppBottom = createSwitchNavigator({
    LoginStack: AppNavigator,
    HomeStack: HomeNavigator,
    },
    {
    initialRouteName: 'LoginStack',
    }
);

export default createAppContainer(AppBottom);