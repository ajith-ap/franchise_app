import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../assets/colors';

type Props = {};

const ToggleButton = (props: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const animatedValue = new Animated.Value(isEnabled ? 1 : 0);

  const handlePress = () => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease), // Use Easing for a smoother transition
    }).start();

    setIsEnabled(!isEnabled);
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 26], // Adjust the value based on your design
  });

  return (
    <TouchableOpacity style={[styles.container, !isEnabled && {borderColor:'#696D68', backgroundColor:'#F2F2F2'}]} onPress={handlePress}>
      <Animated.View
        style={[
          styles.innerView,
          { transform: [{ translateX }] },
          !isEnabled && { backgroundColor: '#545554' },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 32,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#78BF76',
    backgroundColor: '#EFFEEE',
    overflow: 'hidden',
    padding: 3,
  },
  innerView: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: Colors.appGreen,
  },
});
