import {
  BackHandler,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Colors } from '../../assets/colors';
import { AppName } from '../../components/AppName';
import {
  CheckIcon,
  HelpIcon,
  OopsIcon,
  OtpVerifySuccessIcon,
  machineIcon,
} from '../../assets/images';
import { CONTENT_HEIGHT, WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant';
import SizedBox from '../../components/SizedBox';
// import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import OtpInput from '../../components/OtpInput';
import { LoginUser, SendUserOTP, VerifyUserOTP } from '../../api/userService';
// import { useNavigation } from '@react-navigation/native';


type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};
const Login = ({ navigation }: Props) => {
  // dummy value  for testing

  let testOtp = 1234;


  /* -------------------------------------------------------------------------- */
  /*                                   States                                   */
  /* -------------------------------------------------------------------------- */
  const [number, setNumber] = useState('');
  const [numberWarnings, setNumberWarnings] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [pageIndex, setPageIndex] = useState(0); // 0 login | 1 otp | 2 succes| 3 failed

  const [otpValues, setOtpValues] = useState(Array(4).fill(''));
  const [otpWarning, setOtpWarning] = useState('');
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                Handle Values                               */
  /* -------------------------------------------------------------------------- */

  const handleMobileNubmer = (e: string) => {
    // console.log(e);
    setNumber(e);
  };

  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                              Otp Time Interval                             */
  /* -------------------------------------------------------------------------- */
  const [seconds, setSeconds] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState<any>('');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {
            clearInterval(interval);
            setIsTimerRunning(false);
            // Additional logic to handle when the timer reaches 0
          }

          return prevSeconds > 0 ? prevSeconds - 1 : 0;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    if (isHome) {
      setTimeout(() => {
        navigation.navigate("SetLocation")
      }, 1000)
    }

  }, [isHome])



  const handleResend = () => {
    setIsTimerRunning(true);
    setSeconds(90); // Reset the timer to 90 seconds
  };

  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                          Button onClick Functions                          */
  /* -------------------------------------------------------------------------- */
  const handleOtpChange = (newOtpValues: string[]) => {
    setOtpValues(newOtpValues);
  };
    const getOtps = async () => {
    console.log("kkkkkkkk")
   setPageIndex(2);
           setIsHome(true);


  };

  const getOtp = async () => {  //uncomment after set login
    const response = await LoginUser(username, password);
    if (response?.mobileNo) {
      console.log("response",response)
      setMobileNo(response?.mobileNo);
      sendOtp();


    }

  };

  const sendOtp = async () => {
    try {
      console.log("OTP",mobileNo)
      const response = await SendUserOTP(mobileNo);
      console.log("response-2",response)

      setPageIndex(1);
    } catch (error) {
      console.log("Error111", error);
    }
  };

  const verifyOtp = async () => {
    let otpCode = parseInt(otpValues.join(''), 10);
    console.log('ootttpp', otpCode);
    try {
      const response = await VerifyUserOTP(mobileNo, otpCode);
      console.log("vvv", response)
      // if (response?.returnCode == 400) {
if (response?.returnCode == 404) {  // change this return code 0
        setPageIndex(2);
        setIsHome(true);
      }
    } catch (error) {
      console.log("Error444", error);
    }

  };

  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const backAction = () => {
      if (pageIndex == 1) {
        setPageIndex(0);
      }
      // Return true to prevent the default behavior (e.g., closing the app)
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []);

  const LoginuserDetails = async () => {
    console.log("username==>", username)
    console.log("password==>", password)

    const res = await LoginUser(username, password);
    console.log("res==>", res)

  };

  /* -------------------------------------------------------------------------- */

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <AppName isColor />
        <SizedBox height={WIN_HEIGHT * 0.03} />

        {/* ---------- Content ---------- */}

        {pageIndex == 0 ? (
          <>
            <Image source={machineIcon} style={styles.imageStyle} />
            <View style={styles.subcontainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={username}
                onChangeText={(e: any) => setUsername(e)}
                autoCapitalize="none"
              />

              {/* Password Input */}
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                value={password}
                onChangeText={(e: any) => setPassword(e)}
                secureTextEntry={true}
              />
              {/* <SizedBox height={WIN_HEIGHT * 0.025} /> */}
              <View style={styles.termsContainer}>
                <TouchableOpacity
                  onPress={() => setIsChecked(!isChecked)}
                  style={styles.checkBox}>
                  {isChecked && (
                    <Image
                      source={CheckIcon}
                      style={{ width: 12, resizeMode: 'contain' }}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity >

                  {/* <TouchableOpacity onPress={()=>navigation.navigate('ScanSuccess')}> */}
                  <Text style={styles.terms}>Accept terms and conditions</Text>
                </TouchableOpacity>
              </View></View>
          </>
        ) : pageIndex == 1 ? (
          <View style={styles.contentContainer}>
            <Text style={[styles.typeTextStyle]}>OTP verification</Text>
            <Text style={styles.descTextStyle}>
              Enter the OTP sent to
              <Text style={styles.descTextStyleBold}> +91 {number}</Text>
            </Text>
            <OtpInput
              warning={otpWarning}
              numberOfRows={4}
              otpValues={otpValues}
              onOtpChange={handleOtpChange}
            />
            <SizedBox height={WIN_HEIGHT * 0.05} />
            <Text style={styles.descTextStyle}>
              {seconds === 0
                ? 'Didn’t Receive Code?'
                : 'Resend Authorisation code in :'}
              <Text
                onPress={() => {
                  if (seconds === 0) {
                    handleResend();
                  }
                }}
                style={[
                  { fontSize: 18, fontFamily: 'Inter-Bold' },
                  seconds === 0 && { color: Colors.primaryColor },
                ]}>
                {seconds === 0 ? '  Resend Code' : ' ' + seconds + ' Sec'}
              </Text>
            </Text>
          </View>
        ) : pageIndex == 2 ? (
          <View style={styles.contentContainer}>
            <Image
              source={OtpVerifySuccessIcon}
              style={{ height: 200, resizeMode: 'contain' }}
            />
            <Text style={styles.verifyText}>Verified</Text>
            <Text style={styles.successText}>Successfully!</Text>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Image
              source={OopsIcon}
              style={{ height: 110, resizeMode: 'contain' }}
            />
            <Text style={[styles.successText, { fontFamily: 'Poppins-SemiBold' }]}>Oops!</Text>
            <Text style={styles.oopsDesc}>
              It looks like this number isn't in MonkeyPot system. Please check
              and confirm the phone number.
            </Text>
          </View>
        )}

        {/* ------------- */}
        {!(pageIndex === 2) && (
          <AppButton
            onPress={() => {
              if (pageIndex == 0) {
                getOtp();
              } else if (pageIndex == 1) {
                verifyOtp();
              } else {
                setPageIndex(0);
              }
            }}
            width={WIN_WIDTH * 0.6}
            bottomZero
            buttonText={
              pageIndex == 0 ? 'Login' : pageIndex == 1 ? 'Verify' : 'Done'
            }
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: CONTENT_HEIGHT,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    alignItems: 'center',
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    marginTop: -20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    width: WIN_WIDTH * 0.85,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: WIN_WIDTH * 0.85,
  },
  termsContainer: {
    width: WIN_WIDTH * 0.85,
    // marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkBox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  terms: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: Colors.text20,
    marginLeft: 10,
  },
  typeTextStyle: {
    fontSize: 24,
    color: Colors.text20,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
  },
  descTextStyle: {
    fontFamily: 'Inter-Medium',
    color: Colors.text20,
    fontSize: 15,
    marginBottom: 20,
  },
  descTextStyleBold: { fontFamily: 'Inter-SemiBold', fontSize: 16 },
  contentContainer: {
    // backgroundColor:'grey',
    alignItems: 'center',
    top: WIN_HEIGHT * 0.11,
  },
  verifyText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    marginTop: 15,
    color: Colors.text40,
  },
  successText: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.text20,
    marginTop: 15,
  },
  oopsDesc: {
    width: WIN_WIDTH * .85,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: Colors.text40,
    textAlign: "center",
    marginTop: 15,
  }
});
