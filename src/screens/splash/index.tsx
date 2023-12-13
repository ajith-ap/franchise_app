import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

type Props = {}

const Splash = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* <Text>Splash</Text> */}
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:Colors.primaryColor, 
  justifyContent:"center", 
  alignItems: "center",
}
})
