import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Colors } from '../../assets/colors';
import { AppName } from '../../components/AppName';
import { machineIcon } from '../../assets/images';
import { WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant';
import SizedBox from '../../components/SizedBox';
import AppTextInput from '../../components/AppTextInput';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}
const Login = ({ navigation }: Props) => {

  const [number, setNumber] = useState('')
  return (
    <ScrollView>

      <View style={styles.container}>
        <AppName isColor />
        <SizedBox height={WIN_HEIGHT * .05} />
        <Image source={machineIcon} style={styles.imageStyle} />
        <SizedBox height={WIN_HEIGHT * .025} />
        <AppTextInput value={number} setValue={setNumber} placeHolderText='Enter registered phone number' />
        <SizedBox height={WIN_HEIGHT * .025} />
        
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: "contain",
    width: WIN_WIDTH * 85
  }
})