import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
        <View>
          <ElevatedCards />
        </View>
        <View>
          <FancyCards />
        </View>
        <View>
          <ActionCard />
        </View>
        <View>
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// import AppPro from './components/AppPro';
// const App = () => {
//   const [mode, setMode]  = useState(true) ;

//   return (
//     <SafeAreaView
//       style={mode ? {flex: 1, justifyContent: 'center', alignItems: 'center'} : {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
//       <View>
//         <AppPro mode={mode} setMode={setMode}></AppPro>
//       </View>
//     </SafeAreaView>
//   );
// };

export default App;
