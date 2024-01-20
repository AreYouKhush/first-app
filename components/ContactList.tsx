import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import contacts from './assets/contacts';

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>Contact List :</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, phone}) => (
          <View key={id} style={styles.userCard}>
            <Image
              style={styles.userImage}
              source={{uri: 'https://source.unsplash.com/random'}}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userPhone}>{phone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 25, padding: 15, fontWeight: 'bold'},
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    gap: 16,
    flexDirection: 'row',
    marginVertical: 2,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 60 / 2,
  },
  userName: {
    color: 'white',
    fontWeight: '600'
  },
  userPhone: {},
});
