import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards :</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>reveal</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>🫢</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>😂</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>😎</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>😭</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={{color: 'white'}}>🥶</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
  },
  container: {
    padding: 5,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  elevatedCard: {
    backgroundColor: '#000000',
    elevation: 4
  },
});
