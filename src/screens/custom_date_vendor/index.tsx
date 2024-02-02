

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CONTENT_HEIGHT } from '../../utils/constant'
import { DailyBusinessIcon, DateRangeIcon, VendorIcon } from '../../assets/images';
import { AppAppBar } from '../../components/AppAppBar';
import DateSelector from '../../components/DateSelector';

type Props = {}

const CustomDateVendor = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF5D080'} />
      <AppAppBar
        icon={VendorIcon}
        text="Custom date Vender"
        shade
        color="#FFF5D080"
      />
        <DateSelector multySelector />

      <View style={styles.content}>
      
      </View>
    </View>
  );
};

export default CustomDateVendor

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
  },
  content: {height: CONTENT_HEIGHT - 180, padding: 20},
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