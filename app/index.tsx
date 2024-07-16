import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions,SafeAreaView,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../navigation/tabs';


const App = () => {
const Tab = createBottomTabNavigator();

  return (
   <>
   
   <StatusBar backgroundColor="#050C9C" barStyle="light-content" />
   
   <NavigationContainer independent={true}>
    < Tabs/>
    </NavigationContainer> 

     </>

  );
};
export default App; 

const styles = StyleSheet.create({
  nav:{
    backgroundColor:"red",
  } 
});