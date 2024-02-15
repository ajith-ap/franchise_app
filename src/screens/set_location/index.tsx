import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CONTENT_HEIGHT, WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import {
  AddLocationIcon,
  BackButtonIcon,
  LocationIcon,
} from '../../assets/images';
import AppDropDown from '../../components/AppDropDown';
import SizedBox from '../../components/SizedBox';
import AppButton from '../../components/AppButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SetLocation = ({navigation}: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          {isDropdownVisible && (
            <TouchableOpacity style={styles.backButton}>
              <Image
                source={BackButtonIcon}
                style={{height: 22, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.headingText}>Select Machine</Text>
        </View>
        <AppDropDown />
        <SizedBox height={WIN_HEIGHT * 0.05} />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Start Date : 01 - 05 -2022</Text>
          <Text style={styles.infoText}>Status Date : 30 - 04 -2023</Text>
          <Text style={styles.infoText}>
            Status : <Text style={{color: Colors.statusGreen}}>Active</Text>
          </Text>
        </View>

        {/* <View > */}
        <Text style={styles.selectLocationText}>Select Location</Text>
        <Text style={styles.selectLocationDescText}>
          Please grant permission for your GPS to access your precise location.
        </Text>

        <View style={styles.mapView}>
          <Image
            source={AddLocationIcon}
            style={{height: 50, resizeMode: 'contain'}}
          />
        </View>

        <View style={{width: WIN_WIDTH * 0.9, alignItems:"center",flexDirection:'row'}}>
          <Image
            style={{width: 20, resizeMode: 'contain'}}
            source={LocationIcon}
          />
          <Text style={[styles.selectLocationSelectText]}>
            Thrissur Railway Station , T1 PF 14
          </Text>
        </View>
        {/* </View> */}

        <AppButton
          onPress={() => {navigation.navigate('Home')}}
          bottomZero
          width={WIN_WIDTH * 0.6}
          buttonText="Set"
        />
      </View>
    </ScrollView>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  headerWrapper: {
    width: WIN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  headingText: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    color: Colors.black,
  },
  backButton: {position: 'absolute', left: 20},
  infoContainer: {
    height: 130,
    width: WIN_WIDTH,
    backgroundColor: Colors.infoContaienrColor,
    paddingLeft: 30,
    paddingVertical: 10,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  infoText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text20,
  },
  selectLocationText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  selectLocationDescText: {
    fontFamily: 'Inter-Medium',
    width: WIN_WIDTH * 0.8,
    fontSize: 16,
    color: Colors.text40,
    textAlign: 'center',
    marginTop: 15,
  },
  mapView: {
    width: WIN_WIDTH * 0.9,
    height: 200,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectLocationSelectText: {
    fontFamily: 'Poppins-Regular',
    width: WIN_WIDTH * 0.82,
    fontSize: 15,
    color: Colors.text40,
    marginLeft:5
  },
});
