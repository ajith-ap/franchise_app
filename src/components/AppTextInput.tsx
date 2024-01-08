import {Image, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/colors';
import {WIN_WIDTH} from '../utils/constant';
import {WarningIcon} from '../assets/images';

type Props = {
  placeHolderText?: string;
  placeHolderColor?: string;
  value: string;
  setValue: (value: string) => void;
  borderColor?: string;
  textColor?: any;
  textSize?: number;
  boxColor?: string;
  warning?: string;

  KeyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
    numberOfLines?: number;
    maxLength?: number;
};

const AppTextInput = ({
  placeHolderText,
  value,
  setValue,
  borderColor,
  placeHolderColor,
  textColor,
  textSize,
  warning = '',
  KeyboardType = 'default',
  numberOfLines=1,
  maxLength,
  
}: Props) => {
  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.container}>
        {value == '' && (
          <Text style={styles.placeHolderStyle}>
            Enter registered phone number
          </Text>
        )}
        <TextInput
          keyboardType={KeyboardType}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          value={value}
          onChangeText={setValue}
          style={[styles.textStyle, textColor && {color: textColor}]}
          placeholderTextColor={placeHolderColor ?? Colors.text40}
        />
      </View>
      {warning != '' && (
        <View style={styles.warningContaienr}>
          <Image
            source={WarningIcon}
            style={{resizeMode: 'contain', height: 16}}
          />
          <Text
          numberOfLines={2}
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: Colors.rejectedColor,
              marginTop: 3,
            }}>
            {warning}
          </Text>
        </View>
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    height: 58,
    width: WIN_WIDTH * 0.85,
    paddingHorizontal: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: Colors.textBoxColor,
    // alignItems: "center",
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.text20,
  },
  placeHolderStyle: {
    position: 'absolute',
    // alignItems:'center',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: Colors.text40,
    marginLeft: 15,
  },
  warningContaienr: {
    // height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
