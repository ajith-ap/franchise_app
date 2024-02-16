import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant'
import { Colors } from '../../assets/colors'
import AppDropDown from '../../components/AppDropDown';
import {Group} from '../../assets/images'
import AppButton from '../../components/AppButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';


type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
  };

const ScanSuccess = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <AppDropDown/>
        <View>
            <View style={styles.subcontainer}>
            <Text style={styles.tag} >Scan Completed Successfully</Text>
            </View>
       
        </View>
        <Image source={Group}
         style={{height: 350, resizeMode: 'contain'}}/> 
         <Text style={styles.scantag}>Please forward this scanned QR code to the Monkey Pan Network.</Text>

         <AppButton
          onPress={() => {navigation.navigate('ViewBusiness')}}
          bottomZero
          width={WIN_WIDTH * 0.6}
          buttonText="Sent"
        />
      
    </View>
  )
}

export default ScanSuccess

const styles = StyleSheet.create({
    container: {
        height: WIN_HEIGHT,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    tag: {
        fontSize:28,
        fontWeight:'bold',
        color:Colors.black,
        textAlign:'center',
        alignSelf:'center'
    },
    subcontainer: {
        marginTop:50,
        width:220,
        
    },
    scantag :{
        fontSize:18,
        fontWeight:'500',
        lineHeight:28,
        textAlign:'center',
        color:Colors.black,
        fontFamily:"Poppins-Medium",
        marginHorizontal:20
    }
})