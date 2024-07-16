import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView, TouchableOpacity,Alert } from 'react-native';
import UserInfo from '../componets/userInfomation/getUserInfo';
import AddInfo from '../componets/adsInfomation/adsInfo';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Profile = () => {
  const handlePress = (option: string) => {
    Alert.alert("Pressed", `You pressed ${option}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatTitleBar}>
        <Text style={styles.chatTitleText}>Account</Text>
        <Ionicons name="settings-sharp" size={24} color="white" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.welcomeBody}>
          <Text style={styles.welcomeText}>Welcome to ikman</Text>
          <Text style={styles.loginPrompt}>Log in to manage your account</Text>
        </View>

        <UserInfo />

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.cards} onPress={() => handlePress('Stay safe')}>
            <MaterialIcons name="safety-check" size={24} color="#A9A9A9" />
            <Text style={styles.accountOptionText}>Stay safe</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards} onPress={() => handlePress('FAQ')}>
            <AntDesign name="questioncircle" size={20} color="#A9A9A9" />
            <Text style={styles.accountOptionText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards} onPress={() => handlePress('How to sell fast')}>
            <FontAwesome name="cart-plus" size={20} color="#A9A9A9" />
            <Text style={styles.accountOptionText}>How to sell fast?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards} onPress={() => handlePress('More')}>
            <Feather name="more-horizontal" size={20} color="#A9A9A9" />
            <Text style={styles.accountOptionText}>More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor:'	#585858'
  },
  scrollContainer: {
    flexGrow: 1,
  },
  chatTitleBar: {
    width: '100%',
    height: 60,
    backgroundColor: "#149777",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
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
  cardsContainer: {
    marginTop: 10,
  },
  cards: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: "#fff",
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingStart: 20,
  },
  accountOptionText: {
    marginStart: 20,
    color: '#484848',
    fontSize: 15,
  },
});

export default Profile;
