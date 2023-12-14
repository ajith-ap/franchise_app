import { View } from 'react-native'
import React from 'react'

type Props = {
    height?: number;
    width?: number;
}

const SizedBox = ({ height=5, width=10 }: Props) => {
    return (
        <View style={{ height: height, width: width }} />

    )
}

export default SizedBox

