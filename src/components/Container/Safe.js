import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'

const SfContainer = (props) => {
    return (
        <View style={styles.fullContainer}>
            <SafeAreaView style={[
                styles.topArea,
                props.containerColor && { backgroundColor: props.containerColor }
            ]} />
            <SafeAreaView style={[
                styles.mainContainer,
                props.containerColor && { backgroundColor: props.containerColor }
            ]}>
                {props.children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    fullContainer: {
        flex: 1
    },
    topArea: {
        flex: 0,
    },
    mainContainer: {
        flex: 1,
    },
})

export default SfContainer