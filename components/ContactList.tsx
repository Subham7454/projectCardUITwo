import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList☎️</Text>
      <ScrollView style={styles.contactContainer} scrollEnabled={false}>
        {contacts.map(items => (
          <View key={items.uid} style={styles.contactBody}>
            <Image source={{uri: items.imageUrl}} style={styles.contactImage} />
            <View>
              <Text style={styles.name}> {items.name}</Text>
              <Text style={styles.status}> {items.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 9,
    marginBottom: 10,
    textAlign: 'center',
  },
  contactContainer: {
    paddingHorizontal: 16,
  },

  contactImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 6,
  },
  contactBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#0d0d0d',
    marginBottom: 6,
  },
  name: {fontSize: 16, color: 'white', fontWeight: '500'},
  status: {fontSize: 12},
});
