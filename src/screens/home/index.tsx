import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import AppDropDown from '../../components/AppDropDown';
import SizedBox from '../../components/SizedBox';
import {
  ScanQrIcon,
  SettingsIcon,
  StopOrderIcon,
  UpdateAppIcon,
  UpdateFoodIcon,
  ViewBusinessIcon,
} from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const menuList = [
  {
    id: 1,
    title: 'Scan Machine',
    icon: ScanQrIcon,
    color: '#78BF7605',
    screen:''
  },
  {
    id: 2,
    title: 'Update Food',
    icon: UpdateFoodIcon,
    color: '#F8BA4B05',
    screen:'UpdateFood'
  },
  {
    id: 3,
    title: 'View Business',
    icon: ViewBusinessIcon,
    color: '#FE781705',
    screen:''
  },
  {
    id: 4,
    title: 'Stop Order',
    icon: StopOrderIcon,
    color: '#E54D3E04',
    screen:''
  },
  {
    id: 5,
    title: 'Update App',
    icon: UpdateAppIcon,
    color: '#98D5F705',
    screen:''
  },
  {
    id: 2,
    title: 'Settings',
    icon: SettingsIcon,
    color: '#A5A8E305',
    screen:''
  },
];

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <AppDropDown />

      <View style={styles.homeIconGrid}>
       {
        menuList?.map((item, index) => (
          <HomeCard key={index} data={item} />
        ))
       }
      </View>
    </View>
  );
};

export default Home;

type HomeCardProps = {
  data:{
    id: number,
    title: string,
    icon: any,
    color: string,
    screen: string,
  }
};

const HomeCard = (props: HomeCardProps) => {
  let {data} = props;

  

  const {navigate} = useNavigation()

  const _onTap = () => {
    navigate(data?.screen)
  }

  return (
    <TouchableOpacity onPress={_onTap} style={styles.homeIconContainer}>
      <View style={[styles.homeIconWrap, {backgroundColor: data?.color}]}>

        <Image style={{height:100, resizeMode:"contain"}} source={data?.icon} />
        <Text style={{
          fontSize:18, 
          fontFamily:"Inter-SemiBold",
          color:Colors.black, 
          marginTop:10
        }}>{data?.title}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WIN_HEIGHT,
    backgroundColor: Colors.white,
    alignItems: 'center',
    // justifyContent:'center'
  },
  homeIconGrid: {
    justifyContent: 'center',
    // alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIN_WIDTH - 20,
    marginTop: 20,
  },

  homeIconContainer: {
    width: WIN_WIDTH * 0.465,
    height: WIN_WIDTH * 0.5,
    padding: 10,
  },
  homeIconWrap: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000010',
    alignItems:"center",
    justifyContent:"center",
  },
});
