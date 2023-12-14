import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../assets/colors';
import { WIN_WIDTH } from '../utils/constant';

type Props = {
    placeHolderText?: string;
    placeHolderColor?: string;
    value: string;
    setValue: (value: string) => void;
    borderColor?: string;
    textColor?: any;
    textSize?: number;
    boxColor?: string;

}

const AppTextInput = ({ placeHolderText, value, setValue, borderColor, placeHolderColor, textColor, textSize }: Props) => {
    return (
        <View style={styles.container}>
            {
                value == "" &&
                <Text style={styles.placeHolderStyle} >Enter registered phone number</Text>
            }
            <TextInput value={value} onChangeText={setValue} style={[styles.textStyle, textColor && { color: textColor }]} placeholderTextColor={placeHolderColor ?? Colors.text40} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        height: 58,
        width: WIN_WIDTH * .85,
        paddingHorizontal: 10,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: Colors.textBoxColor,
        // alignItems: "center",
        justifyContent: 'center',

    },
    textStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.text20
    },
    placeHolderStyle: {
        position: "absolute",
        // alignItems:'center',
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
        color: Colors.text40,
        marginLeft: 15
    }
})