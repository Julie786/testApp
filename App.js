import React from 'react';
import {View, Text} from 'react-native';
import {StackContainer} from './navigation/StackConatiner';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Hello
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <NavigationContainer>
        <StackContainer />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
