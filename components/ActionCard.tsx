import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';

function ActionCard() {
  function openWebsite(uri: string) {
    Linking.openURL(uri);
  }
  return (
    <View>
      <ScrollView>
        <Text style={styles.BlogText}>BLOGCard</Text>
        <View style={styles.BlogContainer}>
          <View style={styles.hearderContainer}>
            <Text style={styles.headerText}>
              Whats new in Javascript 21 -ES12
            </Text>
          </View>
          <Image source={require('../public/a1.webp')} style={styles.Img} />
          <View style={styles.bodyConatiner}>
            <Text style={styles.bodyText} numberOfLines={2}>
              ES6 or the ECMAScript 2015 is the 6th and major edition of the
              ECMAScript language specification standard. It defines the
              standard for the implementation of JavaScript and it has become
              much more popular than the previous edition ES5.
            </Text>
          </View>
          <View style={styles.fotterConatiner}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.boardinfinity.com/blog/top-10-features-of-es6/',
                )
              }>
              <Text style={styles.fotterText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  BlogText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  BlogContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 7,
    marginRight: 7,
    elevation: 5,
    height: 430,
    width: 410,
  },
  Img: {
    height: 300,
    width: '95%', // Fixed width for testing
    borderRadius: 8, // Rounded corners
    // Adjust as needed: 'contain', 'stretch', etc.

    marginLeft: 10,
    marginVertical: 8,
  },
  hearderContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 25,

    fontSize: 20,
    fontWeight: '100',
  },
  bodyConatiner: {},
  bodyText: {marginLeft: 10, marginRight: 8},
  fotterConatiner: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    marginLeft: 150,
    marginTop: 10, // Add margin at the top
    marginBottom: 5, // Add margin at the bottom
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    borderRadius: 10, // Add rounded corners for button-like appearance
    borderWidth: 1, // Add a border
    borderColor: 'gray', // Set border color
    shadowColor: '#000', // Add shadow for button effect
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  fotterText: {
    color: 'black',
    fontWeight: 'bold', // Make the text bold
    fontSize: 16, // Increase font size for better readability
  },
});

export default ActionCard;
