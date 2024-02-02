import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {WIN_HEIGHT, WIN_WIDTH} from '../utils/constant';
import {Colors} from '../assets/colors';
import {BackButtonIcon, ShareIcon} from '../assets/images';
import { useNavigation } from '@react-navigation/native';

type Props = {
  isLogo?: boolean;
  color?: string;
  onPress?: () => void;
  // rightAction?: () => void;
  text?: string;
  logo?: string;
  icon?: string;
  shade?: boolean;
};

export const AppAppBar: React.FC<Props> = ({
  isLogo,
  color,
  onPress,

  text,
  logo,
  icon,
  shade,
}) => {
const navigation = useNavigation()

  const styles = StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: color ?? Colors.white,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: shade ? 0.5 : 0,
      borderBottomColor: '#00000020',
    },
    backButton: {
      width: 40,
      height: 40,
      position: 'absolute',
      left: 20,
      // alignItems: 'center',
      justifyContent: 'center',
    },
    rightButton: {
      width: 40,
      height: 40,
      position: 'absolute',
      right: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    backButtonIcon: {
      resizeMode: 'contain',
      height: 25,
    },
    rightButtonIcon: {
      resizeMode: 'contain',
      height: 25,
    },
    iconStyle:{
      resizeMode: 'contain',
      width: 25,
      height: 25,
    },
    textStyle:{
      fontFamily: 'Inter-SemiBold',
      fontSize: 18,
      color: Colors.text20,
      marginLeft: 20,
    }
  });

  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>navigation.pop() } style={styles.backButton}>
        <Image source={BackButtonIcon} style={styles.backButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>onPress && onPress() } style={styles.rightButton}>
        <Image source={ShareIcon} style={styles.rightButtonIcon} />
      </TouchableOpacity>
      <Image style={styles.iconStyle} source={icon} />
        <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};
