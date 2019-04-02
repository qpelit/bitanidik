import React from 'react';
import { Platform,Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailListScreen from '../screens/DetailListScreen';

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
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }
  }, 
  DetailList: {
    screen: DetailListScreen
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



const LinksStack = createStackNavigator({
  Links: {
    screen: LinksScreen,
    navigationOptions:{ headerTitle: "Tanıdık Bul"}
  }
},
{
  initialRouteName: 'Links',
  defaultNavigationOptions,
}  
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Tanıdık Bul',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions:{ headerTitle: "Profile"}
  }
},
{
  initialRouteName: 'Settings',
  defaultNavigationOptions,
}  
);


SettingsStack.navigationOptions = {
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
  LinksStack,
  SettingsStack});

 
