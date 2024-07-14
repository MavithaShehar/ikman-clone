import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions, FlatList, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const DATA = [
  { id: '1', title: 'Electronics', uri: 'https://img.icons8.com/color/48/cell-phone.png' },
  { id: '2', title: 'Vehicles', uri: "https://img.icons8.com/fluency/48/car--v1.png" },
  { id: '3', title: 'Property', uri: 'https://img.icons8.com/fluency/48/home.png' },
  { id: '4', title: 'House & Garden', uri: "https://img.icons8.com/pulsar-gradient/48/house-with-a-garden.png" },
  { id: '5', title: 'Animals', uri: "https://img.icons8.com/3d-fluency/94/dog.png" },
  { id: '6', title: 'Services', uri: "https://img.icons8.com/fluency/48/maintenance--v1.png" },
  { id: '7', title: 'Business & Industry', uri: "https://img.icons8.com/fluency/48/factory-1.png" },
  { id: '8', title: 'Jobs', uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-job-recruitment-agency-flaticons-flat-flat-icons-2.png" },
  { id: '9', title: 'Hobby,Sport & Kids', uri: "https://img.icons8.com/emoji/48/soccer-ball-emoji.png" },
  { id: '10', title: 'Fashion & Beauty', uri: "https://img.icons8.com/3d-fluency/94/clothes.png" },
  { id: '11', title: 'Essentials', uri: "https://img.icons8.com/fluency/48/fast-moving-consumer-goods.png" },
  { id: '12', title: 'Education', uri: "https://img.icons8.com/external-filled-line-andi-nur-abdillah/64/external-Education-woman's-day-(filled-line)-filled-line-andi-nur-abdillah.png" },
  { id: '13', title: 'Agriculture', uri: "https://img.icons8.com/fluency/48/wheat.png" },
  { id: '14', title: 'Work OverSeas', uri: "https://img.icons8.com/fluency/48/office.png" },
  { id: '15', title: 'Other', uri: "https://img.icons8.com/3d-fluency/94/more--v1.png" },
];

const handleCardPress = (title: string) => {
  Alert.alert(`You pressed ${title}`);
  // Here you can add navigation logic or any other logic you need
  // For example: navigation.navigate('Details', { title: title });
};

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarbody}>
        <View style={styles.searchBar}>
          <TextInput placeholder='What are you looking for?' style={styles.input}></TextInput>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={20} color="#673500" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.changeLocationBar}>
        <Ionicons style={{ marginStart: 10 }} name="location-sharp" size={24} color="#149777" />
        <Text style={{ marginStart: 10 }}>All of Sri Lanka</Text>
        <View style={styles.flexSpacer} />
        <TextInput style={styles.changelocationBtn} value="Change location" />
      </View>

      <View style={styles.cardscontainer}>
        <FlatList
          data={DATA}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cards} onPress={() => handleCardPress(item.title)}>
              <Image
                source={{ uri: item.uri }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  searchBarbody: {
    width: '100%',
    height: 68,
    backgroundColor: "#149777",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    padding: 13,
  },
  searchBar: {
    width: '100%',
    height: '100%',
    backgroundColor: "#ffff",
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
    padding: 4,
  },
  input: {
    flex: 1,
  },
  searchBtn: {
    width: 35,
    height: '100%',
    backgroundColor: "#ffc800",
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: "center",
    marginLeft: 10,
  },
  changeLocationBar: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  flexSpacer: {
    flex: 1,
  },
  changelocationBtn: {
    color: '#1679AB',
    textAlign: 'right',
  },
  cardscontainer: {
    width: '100%',
    height: screenHeight,
  },
  cards: {
    height: 100,
    width: screenWidth / 3,
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  cardText: {
    color: 'gray',
  },
  logo: {
    height: 20,
    width: 120,
  },
});

export default Search;
