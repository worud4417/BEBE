import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import color from '../src/resource/Color';

import OpenScreen from '../src/screen/OpenScreen';
import LoginScreen from '../src/screen/LoginScreen';
import JoinScreen from '../src/screen/JoinScreen';
import MainScreen from './screen/MainScreen';
import CategoriesScreen from './screen/CategoriesScreen';
import MenuScreen from './screen/MenuScreen';
import MyScreen from './screen/MyScreen';
import DetailScreen from './screen/DetailScreen';
import ListScreen from './screen/ListScreen';
import LogoutComponent from './component/LogoutComponent';
import ProductRegistrationScreen from './screen/ProductRegistrationScreen';

const menuStackNavigator = createStackNavigator({
    Menu:{
        screen:MenuScreen
    },
    Logout:{
        screen:LogoutComponent
    },
    ProductRegistration:{
        screen:ProductRegistrationScreen
    }
})

const CategoriesStackNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen
    },
    List:{
        screen:ListScreen
    },
    Detail:{
        screen:DetailScreen
    }
})

const myStackNavigator = createStackNavigator({
    My:{
        screen:MyScreen
    }
})

const mainStackNavigator = createStackNavigator({
    Main:{
        screen:MainScreen
    }
})

const bottomTabNavigator = createMaterialBottomTabNavigator({
    홈:{
        screen:mainStackNavigator,
        navigationOptions:{
            tabBarColor:color.menu4,
            tabBarIcon:({focused,horizontal,tintColor})=>{
                return <Icon name="ios-home" size={25} color={tintColor}></Icon>
            }
        }
    },
    카테고리:{
        screen:CategoriesStackNavigator,
        navigationOptions:{
            tabBarColor:color.menu2,
            tabBarIcon:({focused,horizontal,tintColor})=>{
                return <Icon name="ios-search" size={25} color={tintColor}></Icon>
            }
        }
    },
    마이:{
        screen:myStackNavigator,
        navigationOptions:{
            tabBarColor:color.menu3,
            tabBarIcon:({focused,horizontal,tintColor})=>{
                return <Icon name="ios-person" size={25} color={tintColor}></Icon>
            }
        }
    },
    더보기:{
        screen:menuStackNavigator,
        navigationOptions:{
            tabBarColor:color.menu1,
            tabBarIcon:({focused,horizontal,tintColor})=>{
                return <Icon name="ios-reorder" size={25} color={tintColor}></Icon>
            }
        }
    }
})

const SwitchNavigator = createSwitchNavigator({
    Open:{
        screen:OpenScreen
    },
    Login:{
        screen:LoginScreen
    },
    Join:{
        screen:JoinScreen
    },
    bottomTab:{
        screen:bottomTabNavigator
    }
},{
    initialRouteName:"Open"
});

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;