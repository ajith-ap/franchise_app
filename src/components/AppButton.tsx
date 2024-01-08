import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {WIN_WIDTH} from '../utils/constant';
import {Colors} from '../assets/colors';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  buttonText?: string;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  bottomZero?: boolean;
  onPress: () => void;
};

const AppButton = (props: Props) => {
  const {
    width = WIN_WIDTH * 0.85,
    height = 68,
    borderRadius=12,
    buttonText,
    buttonColor=Colors.primaryColor,
    textColor = Colors.text10,
    fontSize,
    bottomZero,
    onPress
  } = props;

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: buttonColor,
    },
    text: {
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold',
      color: textColor,
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        styles.container,
        bottomZero && {position: 'absolute', bottom: 30},
      ]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
