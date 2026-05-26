

import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet,
  View,
} from 'react-native';

import { Colors } from './src/assets/colors';
import StackNavigationContainer from './src/navigations/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={Colors.white} />


          <StatusBar barStyle="light-content" />
          <StackNavigationContainer />
        </SafeAreaView>
        <Toast />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },

});

export default App;
