import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Platform
} from 'react-native'

import { TcBox } from '@components/Tick'

const TcList = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                styles.buttonContainer,
                props.containerStyle,
            ]}
            activeOpacity={0.8}
        >
            <View style={styles.textContainer}>
                <Text style={[
                    styles.text,
                    props.fontStyle
                ]}>{props.title}</Text>
            </View>
            <View style={styles.tickContainer}>
                {
                    props.isDone && <TcBox
                        onPress={props.onPressTick}
                        active={props.isDone}
                    />
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 14,
        paddingVertical: 8,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 16,
    },
    textContainer: {
        flex: 1,
    },
    tickContainer: {
        width: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        textAlign: 'left'
    },
})

export default TcList