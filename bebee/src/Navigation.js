import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
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

const menuStackNavigator = createStackNavigator({
    Menu:{
        screen:MenuScreen
    }
})

const CategoriesStackNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen
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

const bottomTabNavigator = createBottomTabNavigator({
    홈:{
        screen:mainStackNavigator
    },
    카테고리:{
        screen:CategoriesStackNavigator
    },
    마이:{
        screen:myStackNavigator
    },
    더보기:{
        screen:menuStackNavigator
    }
},{
    defaultNavigationOptions:({navigation})=>({
        tabBarIcon:({focused,horizontal,tintColor})=>{
          const {routeName} = navigation.state;
          if(routeName === "홈"){
            return <Icon name="ios-home" size={30} color={tintColor}></Icon>
          }
          else if(routeName === "카테고리"){
            return <Icon name="ios-search" size={30} color={tintColor}></Icon>
          }
          else if(routeName === "마이"){
            return <Icon name="ios-person" size={30} color={tintColor}></Icon>
          }
          else if(routeName === "더보기"){
            return <Icon name="ios-reorder" size={30} color={tintColor}></Icon>
          }
        }
      }),
      tabBarOptions:{
        activeTintColor:color.mainColor
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