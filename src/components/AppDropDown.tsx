import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {WIN_WIDTH} from '../utils/constant';
import {Colors} from '../assets/colors';
import {DownInvisibleIcon} from '../assets/images';

type Props = {
  onPress?: () => void;
  inputValue?:string;
  handleInputValue?: (value: string) => void;
};

const AppDropDown = ({onPress, inputValue, handleInputValue}: Props) => {
  

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={onPress ? false : true}>
      {onPress ? (
        <>
          <Text numberOfLines={2} style={styles.text}>
            Select your machine
          </Text>
          <Image
            source={DownInvisibleIcon}
            style={{height: 15, resizeMode: 'contain'}}
          />
        </>
      ) : (
        <TextInput
          value={inputValue}
          onChangeText={handleInputValue}
          placeholder="Select Machine"
          style={styles.inputContainer}
        />
      )}
    </TouchableOpacity>
  );
};

export default AppDropDown;

const styles = StyleSheet.create({
  container: {
    width: WIN_WIDTH * 0.85,
    height: 60,
    borderWidth: 1,
    borderRadius: 60,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.dropDownTextColor,
    width: WIN_WIDTH * 0.65,
  },
  inputContainer: {
    width: WIN_WIDTH * 0.85,
    height: 60,

    // paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: Colors.white,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.dropDownTextColor,
  },
});
