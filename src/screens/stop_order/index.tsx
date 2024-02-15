import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CONTENT_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import {AppAppBar} from '../../components/AppAppBar';
import ToggleButton from '../../components/ToggleButton';
import SizedBox from '../../components/SizedBox';

type Props = {};

const StopOrder = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FEF8F7'} barStyle={'dark-content'} />

      <AppAppBar shade color="#FEF8F7" text="Stop Order" />
      <View style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>Stop Customer Orders </Text>
        <ToggleButton />
      </View>
      <View style={styles.divider} />
      <SizedBox height={50} />
      <Text style={styles.toggleHintText}>
        Click the toggle button to stop food {'\n'} ordering service.
      </Text>
    </View>
  );
};

export default StopOrder;

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
    backgroundColor: Colors.white,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIN_WIDTH,
    height: 100,
    paddingHorizontal: 30,
  },
  toggleButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.black,
  },
  divider: {
    height: 2,
    width: WIN_WIDTH -60,
    backgroundColor: Colors.text40,
    alignSelf: 'center',
  },
  toggleHintText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.text40,
    textAlign: 'center',
    marginTop: 20,
  },
});
