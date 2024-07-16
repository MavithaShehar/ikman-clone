import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import UserInfo from '../componets/userInfomation/getUserInfo';
import AddInfo from '../componets/adsInfomation/adsInfo';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatTitleBar}>
          <Text style={styles.chatTitleText}>My Chats</Text>
        </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.welcomeBody}>
          <Text style={styles.welcomeText}>Welcome to ikman</Text>
          <Text style={styles.loginPrompt}>Log in to see your chats</Text>
        </View>

        <UserInfo />
        <View style={styles.divider}></View>
        <AddInfo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:60
  },
  scrollContainer: {
    flexGrow: 1,
  },
  chatTitleBar: {
    width: '100%',
    height: 60,
    backgroundColor: "#149777",
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  chatTitleText: {
    color: 'white',
    fontSize: 20,
  
  },
  welcomeBody: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
  },
  loginPrompt: {
    color: 'gray',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Chat;
