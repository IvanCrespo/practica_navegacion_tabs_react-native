import React from 'react'
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    name: string
    size?: number
    color?: string
}

export const IonIcon = ({name, size = 25, color = 'black'}: Props) => {
    return (
        <Text>
            <Icon name={name} size={size} color={color} />
        </Text>
    )
}
