import React from 'react';
import { Platform,Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MaterialIcon from "react-native-vector-icons/FontAwesome5";

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/main/HomeScreen';
import ListScreen from '../screens/main/ListScreen';
import UserScreen from '../screens/main/UserScreen';
import ListPostsScreen from '../screens/posts/ListPostsScreen';
import OpenPostScreen from '../screens/posts/OpenPostScreen';
import EditUserInfoScreen from '../screens/settings/user/EditUserInfoScreen';
import SettingsScreen from '../screens/settings/SettingsSecreen';
import LoadingScreen from '../screens/auth/Loading'
import SignUpScreen from '../screens/auth/SignUp'
import LoginScreen from '../screens/auth/Login'
import NotificationScreen from '../screens/notification/NotificationScreen'
import AddPostScreen from '../screens/posts/AddPostScreen';
import BidActionScreen from '../screens/bids/BidActionScreen';

var defaultNavigationOptions=   {
  headerStyle: {
    backgroundColor: '#F97F51',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{ headerTitle: "BİTANIDIK",
    headerRight: (
      <MaterialIcon  size={26} style={{marginRight:10}} color='#fff' solid={true} onPress={() => this.props.navigation.navigate('EditSettings')} name="envelope"></MaterialIcon>
    ),
  }
  }, 
  ListPosts: {
    screen: ListPostsScreen
  },
  OpenPost: {
    screen: OpenPostScreen
  },
  BidAction:{
    screen : BidActionScreen
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions,
}  
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Tanıdık Arayanlar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};



const ListStack = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions:{ headerTitle: "Listem"}
  },
  AddPost:{
    screen: AddPostScreen,
    navigationOptions:{ headerTitle: "Yeni İlan Ver"}
  }
},
{
  initialRouteName: 'List',
  defaultNavigationOptions,
}  
);

ListStack.navigationOptions = {
  tabBarLabel: 'Listem',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};
const NotificationStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions:{ headerTitle: "Bildirimler"}
  }
},
{
  initialRouteName: 'Notification',
  defaultNavigationOptions,
}  
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Bildirimler',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};

const UserStack = createStackNavigator({
  UserScreen: {
    screen: UserScreen
  },
  EditUserInfo: {
    screen: EditUserInfoScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Loading:{
    screen:LoadingScreen,
    navigationOptions:{ title: "Profil"}

  },
  SignUp:{
    screen:SignUpScreen
  },
  Login:{
    screen:LoginScreen
  }
},
{
  initialRouteName: 'Loading',
  defaultNavigationOptions,
}  
);


UserStack.navigationOptions = {
  tabBarLabel: 'Ben',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  NotificationStack,
  UserStack
  });

 
