import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import LoginContainer from "../containers/LoginContainer";
import TestContainer from "../containers/TestContainer";
import HomeContainer from "../containers/HomeContainer";
import ConversationContainer from "../containers/ConversationContainer";

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            title: 'Login'
        }
        },
    Test: {
        screen: TestContainer,
        navigationOptions: {
            title: 'Test'
        }
    }
    }, {
    initialRouteName: 'Test',
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
    }
    }, {
    initialRouteName: 'Conversation',
    headerLayoutPreset: 'center',
})

const AppBottom = createSwitchNavigator({
    LoginStack: AppNavigator,
    HomeStack: HomeNavigator,
    },
    {
    initialRouteName: 'HomeStack',
    }
);



export default createAppContainer(AppBottom);