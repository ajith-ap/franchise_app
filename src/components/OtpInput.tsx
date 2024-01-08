import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { WIN_WIDTH } from '../utils/constant';
import { Colors } from '../assets/colors';
import { InvalidIcon } from '../assets/images';

type OtpInputProps = {
  numberOfRows?: number;
  otpValues: string[];
  onOtpChange: (otpValues: string[]) => void;
  warning: string;
};

const OtpInput = (props: OtpInputProps) => {
  const { numberOfRows = 4, otpValues, onOtpChange, warning='' } = props;
  const textInputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    // Focus the first TextInput when the component mounts
    if (textInputRefs.current.length > 0 && textInputRefs.current[0]) {
      textInputRefs.current[0]?.focus();
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: WIN_WIDTH * 0.85,
      height: 68,
      flexDirection: 'row',
      justifyContent:'center'
    },
    otpBox: {
      width: 70,
      height: 70,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors.otpBoxBorderColor,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    otp: {
      fontSize: 35,
      fontFamily: 'Inter-SemiBold',
      color: Colors.text10,
    },
    warningContaienr: {
      // height: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      marginTop:10
    },
  });

  const handleTextChange = (index: number, value: string) => {
    // Move focus to the next TextInput when the current one is filled
    if (index < textInputRefs.current.length - 1 && value !== '') {
      textInputRefs.current[index + 1]?.focus();
    }

    // Update the OTP value in the parent component
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    onOtpChange(newOtpValues);
  };

  const handleBackspace = (index: number) => {
    // Move focus to the previous TextInput when backspace is pressed on an empty field
    if (index > 0 && otpValues[index] === '') {
      textInputRefs.current[index - 1]?.focus();
    }

    // Clear the OTP value in the parent component
    const newOtpValues = [...otpValues];
    newOtpValues[index] = '';
    onOtpChange(newOtpValues);
  };

  return (
    <View>

    <View style={styles.container}>
      {Array(numberOfRows)
        .fill(0)
        .map((_, i) => (
          <View style={styles.otpBox} key={i}>
            <TextInput
              ref={(ref) => (textInputRefs.current[i] = ref)}
              onChangeText={(value) => handleTextChange(i, value)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(i);
                }
              }}
              style={styles.otp}
              value={otpValues[i]}
              keyboardType="numeric"
              maxLength={1}
              />
          </View>
        ))}
    </View>
    {warning != '' && (
        <View style={styles.warningContaienr}>
          <Image
            source={InvalidIcon}
            style={{resizeMode: 'contain', height: 16}}
          />
          <Text
          numberOfLines={2}
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: Colors.rejectedColor,
              marginTop: 3,
            }}>
            {warning}
          </Text>
        </View>
      )}
        </View>
  );
};

export default OtpInput;
