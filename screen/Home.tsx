import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height: screenHeight } = Dimensions.get('window');

const DATA = [
  { id: '1', title: 'First Item 1' },
  { id: '2', title: 'Second Item 1' },
  { id: '3', title: 'Third Item 1' },
  { id: '4', title: 'First Item 2' },
  { id: '5', title: 'Second Item 2' },
  { id: '6', title: 'Third Item 2' },
  { id: '7', title: 'First Item 3' },
  { id: '8', title: 'Second Item 3' },
  { id: '9', title: 'Third Item 3' },
  { id: '10', title: 'Third Item 3' },
  { id: '11', title: 'Third Item 3' },
];

const Home = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/images/ikman-logo.png')} />
      </View>

      <View style={styles.selectBar}>
        <View style={styles.tabBarButton}>
          <Ionicons name="location-sharp" size={24} color="#149777" />
          <TouchableOpacity onPress={() => Alert.alert('Location button pressed')}>
            <Text style={styles.buttonText}>Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.tabBarButton}>
          <Ionicons name="pricetag" size={24} color="#149777" />
          <TouchableOpacity onPress={() => Alert.alert('Category button pressed')}>
            <Text style={styles.buttonText}>Category</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>

        <View>
          <Image
            style={{ width: 30, height: 30, tintColor: "#149777", margin: 10 }}
            source={{ uri: 'https://img.icons8.com/fluency-systems-regular/48/000000/vertical-settings-mixer--v1.png' }}
          />
        </View>
      </View>

      <SafeAreaView style={styles.cardsContainer}>
        
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => (
            
            <View style={styles.cards}>
              <View style={styles.cardsImage}>
                <Image style={styles.img} source={require('../assets/images/shoe.jpg')} />
              </View>
              <View style={styles.itemData}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemPrice}>Rs 2000</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />


      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 57,
    backgroundColor: "#149777",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  selectBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    justifyContent: "space-between",
    height: 40,
    paddingLeft:40,
    paddingEnd:20
  },
  tabBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
  
    fontSize: 15,
    color: '#383838',
    marginLeft: 5,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
  },
  logo: {
    height: 20,
    width: 120,
  },
  img: {
    width: "100%",
    overflow: "hidden",
  },
  cardsContainer: {
    flex: 1,
    padding: 10,
  },
  cards: {
    backgroundColor: "#fff",
    width: '47%',
    margin: 5,
    borderRadius: 2,
    overflow: "hidden",
    paddingBottom: 20,
  },
  cardsImage: {
    backgroundColor: "#FFB22C",
    marginBottom: 10,
    alignItems: 'center',
  },
  itemData: {
    margin: 7,
  },
  itemName: {
    fontWeight: '800',
  },
  itemPrice: {
    color: "#149777",
    fontWeight: '800',
  },
});

export default Home;