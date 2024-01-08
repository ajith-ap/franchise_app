import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WIN_WIDTH} from '../utils/constant';
import {Colors} from '../assets/colors';
import {DownInvisibleIcon} from '../assets/images';

type Props = {};

const AppDropDown = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>Select your machine</Text>
      <Image
        source={DownInvisibleIcon}
        style={{height: 15, resizeMode: 'contain', }}
      />
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
    marginVertical:10

  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.dropDownTextColor,
    width:WIN_WIDTH * .65
  },
});
