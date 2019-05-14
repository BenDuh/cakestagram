import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import LoginContainer from "../containers/LoginContainer";
import TestContainer from "../containers/TestContainer";
import HomeContainer from "../containers/HomeContainer";

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
        }
    }, {
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