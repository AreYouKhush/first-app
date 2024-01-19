import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import AppPro from './AppPro';

const App = () => {
  return (
    <SafeAreaView  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
      <AppPro></AppPro>
      </View>
    </SafeAreaView>
  );
};

export default App;
