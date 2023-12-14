

import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet,
} from 'react-native';

import StackNavigationContainer from './src/navigations/StackNavigation';
import { Colors } from './src/assets/colors';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>


      <StatusBar barStyle="light-content" />
      <StackNavigationContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

export default App;
