import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CONTENT_HEIGHT, WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {AppAppBar} from '../../components/AppAppBar';
import {
  DailyBusinessIcon,
  DateRangeIcon,
  VendorIcon,
  ViewBusinessIcon,
} from '../../assets/images';
import {Colors} from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const ViewBusiness = (props: Props) => {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF5D080'} />
      <AppAppBar
        icon={ViewBusinessIcon}
        text="View Business"
        shade
        color="#FFF5D080"
      />

      <View style={styles.content}>
        <Card onPress={() => navigation.navigate('DailyBusiness')} text="Daily Business" icon={DailyBusinessIcon} />
        <Card onPress={() => navigation.navigate('CustomDateRange')} text="Custom date Range" icon={DateRangeIcon} />
        <Card onPress={() => navigation.navigate('CustomDateVendor')} text="Date Range by Vender" icon={VendorIcon} />
      </View>
    </View>
  );
};

export default ViewBusiness;

type CardProps = {
  icon: string;
  text: string;
  onPress?:() => void;
};
const Card = ({icon, text, onPress}: CardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.cardContainer}>
      <Image style={{resizeMode: 'contain', width: 60}} source={icon} />
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Inter-Medium',
          color: Colors.text20,
          marginLeft: 20,
          width:WIN_WIDTH * .6
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  container: {
    height: WIN_HEIGHT,
  },
  content: {height: CONTENT_HEIGHT - 80, padding: 20},
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 90,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DDDDDD50',
    backgroundColor: '#F6F6F650',
    marginBottom: 15,
  },
});
