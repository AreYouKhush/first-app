import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places :</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1705621089531-a5320a7cd4e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lowrider</Text>
          <Text style={styles.cardLabel}>San Andreas</Text>
          <Text style={styles.cardDescription}>
            This is a classic white car with elevated front and chrome
            detailing, parked outside a building, exuding vintage elegance.
          </Text>
          <Text style={styles.cardFooter}>Downtown, Los Santos</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1705621089531-a5320a7cd4e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lowrider</Text>
          <Text style={styles.cardLabel}>San Andreas</Text>
          <Text style={styles.cardDescription}>
            This is a classic white car with elevated front and chrome
            detailing, parked outside a building, exuding vintage elegance.
          </Text>
          <Text style={styles.cardFooter}>Downtown, Los Santos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 6,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardBody: {
    padding: 6,
    flexGrow: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold'
  },
});
