import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native';
import UserInfo from '../componets/userInfomation/getUserInfo';
import AddInfo from '../componets/adsInfomation/adsInfo';
import { AntDesign } from '@expo/vector-icons';


const { height: screenHeight } = Dimensions.get('window');

const PostAd = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postAdsBody}>
        <View style={styles.postAds}>
          <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 10 }}>Post an ad</Text>
          <AntDesign name="closecircleo" size={24} color="gray" />
        </View>
        <Text style={{ color: 'gray' }}>Login to post your ad and keep track of it in your account.</Text>
      </View>

      <UserInfo />
      

      <View style={styles.divider}></View>

      <AddInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postAdsBody: {
    padding: 15,
  },
  postAds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 0.5,
    backgroundColor: 'gray',
    width: '90%',
    marginHorizontal: 40,
    alignSelf: 'center',
  },
});

export default PostAd;
