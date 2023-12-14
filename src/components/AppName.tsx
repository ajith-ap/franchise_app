import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WIN_WIDTH } from '../utils/constant';
import { Colors } from '../assets/colors';

type Props = {
    isColor?: boolean;
};

export const AppName: React.FC<Props> = ({ isColor }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.headerTextStyle, isColor && { color: Colors.appGreen }]}>Monkey
                <Text style={isColor && { color: Colors.appOrange }}>Pot</Text></Text>
            <Text style={[styles.descTextStyle, isColor && { color: Colors.black, fontFamily: 'Poppins-Medium' }]}>Grab the Taste of Town | Fresh | Hygiene</Text>
            <Text style={[styles.typeTextStyle, isColor && { color: Colors.black, fontSize: 24 }]}>Franchise App</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: WIN_WIDTH,
        alignItems: 'center',
    },
    headerTextStyle: {
        fontFamily: "AlfaSlabOne-Regular",
        fontSize: 36,
        color: Colors.text20,
        marginBottom:12
    },
    descTextStyle: {
        fontFamily: "Poppins-Bold",
        color: Colors.text20,
        fontSize: 14,
        marginBottom:12


    },
    typeTextStyle: {
        fontSize: 20,
        color: Colors.text20,
        fontFamily: 'Inter-Bold',

    }

})