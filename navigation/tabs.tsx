
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screen/Home';
import Chat from '../screen/Chat';
import PostAd from '../screen/PostAd';
import Profile from '../screen/Profile';
import Search from '../screen/Search';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: "#149777",
  tabBarInactiveTintColor: "#383838",
  tabBarLabelStyle: {
    fontSize: 12,
    paddingBottom: 5,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 60,
    borderColor: '#149777',
    borderWidth: 1,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name="home-outline" size={28} color={focused ? "#149777" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={28} color={focused ? "#149777" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Post ad"
        component={PostAd}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              style={{
                top: Platform.OS === "ios" ? -5 : -10,
                width: Platform.OS === "ios" ? 40 : 50,
                height: Platform.OS === "ios" ? 40 : 50,
                borderRadius: Platform.OS === "ios" ? 25 : 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#FFB22C",
                padding:10,
                borderStyle:"solid",
                borderColor: 'white',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, 0.50)',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
                shadowRadius: 50,
                elevation: 20, // For Android shadow
          
               
              }}
              name='add-circle' size={30} color={focused ? '#149777' : '#673500'}  />
              
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name="chatbubbles-outline" size={28} color={focused ? "#149777" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name="person-outline" size={28} color={focused ? "#149777" : "gray"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
