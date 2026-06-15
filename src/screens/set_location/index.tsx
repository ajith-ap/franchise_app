import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  PermissionsAndroid, Platform
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { CONTENT_HEIGHT, WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant';
import { Colors } from '../../assets/colors';
import {
  AddLocationIcon,
  BackButtonIcon,
  LocationIcon,
} from '../../assets/images';
import SizedBox from '../../components/SizedBox';
import AppButton from '../../components/AppButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { getMachineMapping, UpdateLocation } from '../../api/userService';
import { Dropdown } from 'react-native-element-dropdown';
import { useAppDispatch } from '../../store';
import { setSelectedMachine } from '../../store/slices/machineSlice';
import Toast from 'react-native-toast-message';
import Geolocation from 'react-native-geolocation-service';
import LottieView from 'lottie-react-native';


type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SetLocation'>;
};


const SetLocation = ({ navigation }: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [machines, setMachines] = useState<any[]>([]);
  const [value, setValue] = useState(null);
  const [selectMachine, setSelectMachine] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  // const [selectedMachine, setSelectedMachine] = useState<any | null>(null);
  const dispatch = useAppDispatch();


  useEffect(() => {
    fetchMachines();
  }, []);

  const fetchMachines = async () => {
    try {
      const res = await getMachineMapping(2);
      setMachines(res.Data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChange = (item: any) => {
    setValue(item?.machineID);
    dispatch(setSelectedMachine(item));
    setSelectMachine(item);
    console.log("selectMachine",selectMachine)

  };

  const handleSelect = () => {
    if (!value) {
      Toast.show({
        type: "error",
        text1: "Alert",
        text2: "Select Your Machine..!",
      });

    }
    else {
      navigation.navigate('Home')
    }
  }

const formatDate = (dateString: string) => {
  if (!dateString) return '';

  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

  const handleSelectLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            gpsLatitude: position.coords.latitude,
            gpsLongitude: position.coords.longitude,
          });
        },
        error => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    });
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }

    return true;
  };

  const saveMachineLocation = async () => {
    try {
setLoading(true);
      // Request Permission
      const hasPermission = await requestLocationPermission();

      if (!hasPermission) {
        Toast.show({
          type: 'error',
          text1: 'Permission Denied',
          text2: 'Location permission is required',
        });
        return;
      }

      // Get Location
      const location: any = await handleSelectLocation();

      const payload = {
        gpsLatitude: location.gpsLatitude,
        gpsLongitude: location.gpsLongitude,
      };

      console.log('Saving Data:', payload);

       const res = await UpdateLocation(
        2,
        10001,
        payload
      );
      if(res?.returnCode == 0){
        setLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Location Fetched',
        text2: 'Machine location updated successfully',
      });
      }

    } catch (error) {
      console.log('Location Error:', error);

      Toast.show({
        type: 'error',
        text1: 'Location Error',
        text2: 'Unable to fetch location',
      });
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          {isDropdownVisible && (
            <TouchableOpacity style={styles.backButton}>
              <Image
                source={BackButtonIcon}
                style={{ height: 22, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.headingText}>Select Machine</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={machines}
          maxHeight={300}
          labelField="machineName"
          valueField="machineID"
          placeholder="Select item"
          value={value}
          onChange={handleChange}
        />
        <SizedBox height={WIN_HEIGHT * 0.05} />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Start Date    : {selectMachine?.machineIssueDate ? formatDate(selectMachine?.machineIssueDate) : 'DD/MM/YYYY'}</Text>
          <Text style={styles.infoText}>Status Date : { selectMachine?.machineStatusUpdateDate ? formatDate(selectMachine?.machineStatusUpdateDate) : 'DD/MM/YYYY'}</Text>
          <Text style={styles.infoText}>
            Status           : <Text style={{ color: Colors.statusGreen }}>
              {
                selectMachine?.machineStatus == 'A' ? 'Active' : 'Inactive'
              }
            </Text>
          </Text>
        </View>

        {/* <View > */}
        {
          selectMachine?.gpsLatitude == '' || selectMachine?.gpsLatitude == null
          ?
          <>
          <Text style={styles.selectLocationText}>Select Location</Text>
        <Text style={styles.selectLocationDescText}>
          Please grant permission for your GPS to access your precise location.
        </Text></>
        :
        <><Text style={styles.selectLocationText}>Location</Text>
        <Text style={styles.selectLocationDescText}>
         Your submitted location.
        </Text>
        </>
        }
        

        <View style={styles.mapView}>
          <LottieView
            source={require('../../assets/gif/location.json')}
            autoPlay
            loop
            style={{
              width: 180,
              height: 180,
              alignSelf: 'center',
            }}
          />
        </View>


        <View style={{ width: WIN_WIDTH * 0.9,display:'flex', alignItems: "flex-start", flexDirection: 'row' , justifyContent:'flex-start'}}>
          <Image
            style={{ width: 20, resizeMode: 'contain' }}
            source={LocationIcon}
          />
          <Text style={[styles.selectLocationSelectText]}>
            {selectMachine?.addressLocation}, {selectMachine?.addressPlace}, {selectMachine?.addressDistrict}. {selectMachine?.addressState}
          </Text>
        </View>
        {/* </View>  */}

         {
          selectMachine?.gpsLatitude == '' || selectMachine?.gpsLatitude == null
          ?

        <AppButton
          onPress={() => saveMachineLocation()}
          bottomZero
          width={WIN_WIDTH * 0.6}
          buttonText={loading ? 'Please wait...' : 'Add Location'}
        />
        :

         <AppButton
          onPress={() => handleSelect()}
          bottomZero
          width={WIN_WIDTH * 0.6}
          buttonText="Next"
        /> 
         }
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
  selectedTextStyle: {
    fontSize: 16,
    color: '#000'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000'
  },
  dropdown: {
    width: WIN_WIDTH * 0.9,
    height: 50,
    borderColor: '#4A90E2',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 3,
  },
  headingText: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    color: Colors.black,
  },
  backButton: { position: 'absolute', left: 20 },
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
    backgroundColor: '#FAF9F6',
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
    marginLeft: 5,
    marginTop:10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  }
});
