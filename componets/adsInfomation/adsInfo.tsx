import React from 'react';
import { View, StyleSheet, Image, Dimensions,Text } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={styles.container}>

      <View style={styles.cards}>

        <Image
          style={styles.image}
          source={{ uri: 'https://img.icons8.com/color/48/add-tag.png' }}
          resizeMode="contain"
        />
        <Text style={styles.text}>Start posting your own ads.</Text>
      </View>

      <View style={styles.cards}>
      <Image
          style={styles.image}
          source={{ uri: "https://img.icons8.com/fluency/48/star--v1.png" }}
          resizeMode="contain"
        />
      <Text style={styles.text}>Mark ads as favorite and view them later.</Text>
      </View>
      
      <View style={styles.cards}>
      <Image
          style={styles.image}
          source={{ uri: 'https://img.icons8.com/glassmorphism/48/tags.png' }}
          resizeMode="contain"
        />
      <Text style={styles.text}>View and manage your ads at your convenience.</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    width: '100%',
    height:70,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:10
  },
  image: {
    width: 40,
    height: 40,
  },
  text:{
    fontSize:16,
    color:'gray',
    paddingLeft:10
  }
});

export default Profile;
