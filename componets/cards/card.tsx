import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.centeredText}>
          This is a card component
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  centeredText: {
    color: 'red',
    fontSize: 27,
    alignSelf: 'center',
  },
});

export default Card;
