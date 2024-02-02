import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CONTENT_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {CalenderIcon, DailyBusinessIcon} from '../../assets/images';
import {AppAppBar} from '../../components/AppAppBar';
import {Colors} from '../../assets/colors';
import SizedBox from '../../components/SizedBox';
import DateSelector from '../../components/DateSelector';

type Props = {};

const DailyBusiness = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF5D080'} />
      <AppAppBar
        icon={DailyBusinessIcon}
        text="Daily Business"
        shade
        color="#FFF5D080"
      />
     <DateSelector  />
      <View style={styles.content}></View>
      <View
        style={styles.bottomBar}>
          <Text style={[styles.bottomBarText,{flex:3}]}>Total</Text>
          <Text style={[styles.bottomBarText,{flex:1}]}>200  <Text style={{fontSize:12}}>pk</Text></Text>
          <Text style={[styles.bottomBarText,{flex:1, textAlign:"right"}]}>₹ 8200</Text>

        </View>
    </View>
  );
};

export default DailyBusiness;

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
  },
  content: {height: CONTENT_HEIGHT - 230, padding: 20,},
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
  bottomBar:{
    height: 50,
    width: WIN_WIDTH,
    backgroundColor: '#308F62',
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-between',
    paddingHorizontal:30
  },
  bottomBarText:{fontFamily:'Inter-SemiBold', fontSize:16, color:Colors.white,}
});
