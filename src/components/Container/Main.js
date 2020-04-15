import React from 'react'
import { StyleSheet, View } from 'react-native'

const MnContainer = (props) => {
    return (
        <View style={[
            styles.container,
            props.style
        ]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
})

export default MnContainer