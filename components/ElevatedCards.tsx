import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me😊</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me😜</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.text}>you can scroll me</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16, // Ensure there’s space around the cards
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Space below heading
  },
  scrollView: {
    flexDirection: 'row', // Ensure horizontal scrolling
    paddingVertical: 8, // Add vertical padding
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    marginHorizontal: 8, // Horizontal margin between cards
  },
  elevatedCard: {
    backgroundColor: 'grey', // Background color for visibility
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    color: 'black',
  },
});

export default ElevatedCards;
