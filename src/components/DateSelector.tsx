import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SizedBox from './SizedBox';
import {CalenderIcon} from '../assets/images';
import {Colors} from '../assets/colors';

type Props = {
  multySelector?: boolean;
};

const DateSelector = ({multySelector}: Props) => {
  return (
    <View style={{height: 100, padding: 20, flexDirection: 'row'}}>
      {multySelector ? (
        <>
          <TouchableOpacity
            style={[styles.calenderContainer, {flex:1, flexDirection:"row"}]}>
            <Text
              style={styles.calenderText}>
              22-01-2022{' '}
            </Text>
            <SizedBox width={6} />
            <Image
              style={{width: 25, resizeMode: 'contain'}}
              source={CalenderIcon}
            />
          </TouchableOpacity>
          <View
            style={{
              height: 60,
              width: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
                style={styles.calenderText}>
              -
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.calenderContainer, {flex:1, flexDirection:"row"}]}>
            <Text
                 style={styles.calenderText}>
              22-01-2022{' '}
            </Text>
            <SizedBox width={6} />
            <Image
              style={{width: 25, resizeMode: 'contain'}}
              source={CalenderIcon}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              height: 60,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#00000020',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Inter-Regular',
                color: '#000000',
              }}>
              22-01-2022 | Mon
            </Text>
          </View>

          <SizedBox width={10} />

          <TouchableOpacity
            style={styles.calenderContainer}>
            <Image
              style={{height: 25, resizeMode: 'contain'}}
              source={CalenderIcon}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
    calenderContainer:{
        height: 60,
        width: 60,
        borderColor: '#1E9D7140',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F4FEF6',
        alignItems: 'center',
        justifyContent: 'center',
      },
      calenderText:{
        fontSize: 16,
        color: Colors.black,
        fontFamily: 'Inter-SemiBold',
      }
});
