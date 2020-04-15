import React from 'react'
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const TcBox = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.8}
            style={[
                styles.container,
                props.active && styles.containerActive,
                !props.active && styles.containerInactive
            ]}
        >
            <Icon
                name='done'
                type='material'
                color={props.active ? 'white' : Colors.darkgrey}
                size={20}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 2.5,
    },
    containerActive: {
        borderColor: Colors.accent,
        backgroundColor: Colors.accent
    },
    containerInactive: {
        borderColor: Colors.grey,
        backgroundColor: 'white'
    }
})

export default TcBox