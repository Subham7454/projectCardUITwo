import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>box1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>box2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>box3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 99,
    borderRadius: 6,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
export default FlatCards;
