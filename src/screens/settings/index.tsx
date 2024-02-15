import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppAppBar} from '../../components/AppAppBar';
import {HomeIcon, LogoutIcon, SupportIcon, TermsIcon, VendorIcon} from '../../assets/images';
import {CONTENT_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Settings = (props: Props) => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.settingsHeaderColor} />
      <AppAppBar
       
        appName
        shade
        color={Colors.settingsHeaderColor}
      />
        <View style={styles.content}>
        <Card onPress={() => navigation.pop()} text="Home" icon={HomeIcon} />
        <Card onPress={() => navigation.navigate('Support')} text="Support" icon={SupportIcon} />
        <Card onPress={() => {Alert.alert('logout')}} text="Logout" icon={LogoutIcon} />
        <Card onPress={() => navigation.navigate('TAndC')} text="T&C" icon={TermsIcon} />

        </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
  },
  content: {height: CONTENT_HEIGHT - 80, padding: 20},
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 70,
  },
});

type CardProps = {
  icon: string;
  text: string;
  onPress?: () => void;
};

const Card = ({icon, text, onPress}: CardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.cardContainer}>
      <Image style={{resizeMode: 'contain', width: 30}} source={icon} />
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Inter-Medium',
          color: Colors.text20,
          marginLeft: 20,
          width: WIN_WIDTH * 0.6,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
