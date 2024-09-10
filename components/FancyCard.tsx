import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Famous Places</Text>
      <View style={styles.card}>
        <Image
          source={require('../public/istockphoto-2119799972-1024x1024.jpg')}
          style={styles.img1}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTittle}>Paris</Text>
          <Text style={styles.cardLoacation}>Location -France</Text>
          <Text style={styles.cardDes}>
            Paris is the capital of France and is known for being the center of
            French culture, politics, business, and economy. It's also
            considered one of the most beautiful cities in the world.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../public/istockphoto-875273240-2048x2048.jpg')}
          style={styles.img1}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTittle}>Barcelona</Text>
          <Text style={styles.cardLoacation}>Location -Spain</Text>
          <Text style={styles.cardDes}>
            It is the capital and largest city of the autonomous community of
            Catalonia, as well as the second-most populous municipality of Spain
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 7,
    marginBottom: 25,
  },
  img1: {
    height: 200,
    width: '100%', // Fixed width for testing
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTittle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  cardLoacation: {color: 'black', fontFamily: 'font1', fontSize: 16},
  cardDes: {color: 'black', fontSize: 14},
});

export default FancyCard;
