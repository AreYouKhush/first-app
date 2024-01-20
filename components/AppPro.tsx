import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

const AppPro = ({mode, setMode}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={
          mode
            ? {color: '#FFFFFF', marginBottom: 24, fontSize: 50}
            : {color: '#000000', marginBottom: 24, fontSize: 50}
        }>
        Pro hu bhai
      </Text>
      <Text
        style={styles.button}
        onPress={() => {
          setMode(!mode);
        }}>
        Change Theme
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    fontWeight: 'bold',
  },
});

export default AppPro;
