import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppName } from '../../components/AppName'
import SizedBox from '../../components/SizedBox'
import { CONTENT_HEIGHT, SCREEN_HEIGHT, WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant'
import { Colors } from '../../assets/colors'
import { AppUpdateIcon } from '../../assets/images'
import AppButton from '../../components/AppButton'

type Props = {}

const UpdatePage = (props: Props) => {
  return (
    <View style={styles.container}>
       <AppName isColor />
        <SizedBox height={CONTENT_HEIGHT * 0.1} />
        <Image style={{width:WIN_WIDTH -40,height:CONTENT_HEIGHT * .3, resizeMode:'contain'}} source={AppUpdateIcon} />

        <SizedBox height={CONTENT_HEIGHT * 0.075} />

        <Text style={{fontSize:23, fontFamily:'Inter-SemiBold', color:Colors.black}}>Check for app update</Text>
        <SizedBox height={CONTENT_HEIGHT * 0.02} />

        <Text style={{fontSize:18, fontFamily:'Inter-Medium', color:Colors.text40}}>Current Version : V2</Text>
        <AppButton onPress={() => {}} width={WIN_WIDTH * .6} borderRadius={70} buttonText='Check now' bottomZero  />
    </View>
  )
}

export default UpdatePage

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        height: CONTENT_HEIGHT,
        backgroundColor: Colors.white,
        paddingVertical: 20,
        alignItems: 'center',
    }
})