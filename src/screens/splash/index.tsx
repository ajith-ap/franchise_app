import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../assets/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import { AppName } from '../../components/AppName'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

const Splash = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <AppName />
    </View>
  )
}



export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  }
})
