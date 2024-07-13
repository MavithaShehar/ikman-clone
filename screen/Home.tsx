import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions,SafeAreaView,FlatList } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'First Item 1',
  },
  {
    id: '2',
    title: 'Second Item 1',
  },
  {
    id: '3',
    title: 'Third Item 1',
  },
  {
    id: '4',
    title: 'First Item 2',
  },
  {
    id: '5',
    title: 'Second Item 2',
  },
  {
    id: '6',
    title: 'Third Item 2',
  },
  {
    id: '7',
    title: 'First Item 3',
  },
  {
    id: '8',
    title: 'Second Item 3',
  },
  {
    id: '9',
    title: 'Third Item 3aaaaaaaaaaaaa',
  },
  {
    id: '10',
    title: 'Third Item 3',
  },
  {
    id: '11',
    title: 'Third Item 3',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (

  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor="#050C9C" barStyle="light-content" />

      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/images/ikman-logo.png')} />
      </View>

      
    
    <SafeAreaView  style={styles.cardsContainer}>

  

      

      <FlatList
        data={DATA}
        numColumns={2} // Adjust the number of columns as per your design
        renderItem={({item}) => 
        <View style={styles.cards}>
        <View style={styles.cardsImage}>
          <Image style={styles.img} source={require('../assets/images/shoe.jpg')} />
        </View>

        <View style={styles.itemData}>
        <Text style={styles.itemName}>DSI Shoe </Text>
        <Text style={styles.itemPrice}>Rs 2000</Text>

        </View>
        
      
      </View>}

        keyExtractor={item => item.id}
      />


    </SafeAreaView >
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 75,
    backgroundColor: "#149777",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    height: 20,
    width: 120,
  },
  img:{
    width:"100%",
    overflow:"hidden"
  },
  centeredText: {
    color: "red",
    fontSize: 27,
    alignSelf: "center",
    marginBottom: 20,
  },
  cards: {
    backgroundColor:"#fff",
    width:'47%',
    margin:5,
    borderRadius:2,
    overflow:"hidden",
    paddingBottom:20,
  },
  cardsContainer: {
    position:"relative",
    backgroundColor: "#e7edee",
    width:'100%',
    height: screenHeight - 55,
    padding:5,
    flexWrap: 'wrap',
  },
  cardsImage: {
    backgroundColor: "#FFB22C",
    marginBottom: 10, 
    alignItems: 'center',
    
  },
  itemData:{
    margin:7
  },
  itemName:{
    fontWeight:'800',
  },
  itemPrice:{
    color:"#149777",
    fontWeight:'800',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home; 