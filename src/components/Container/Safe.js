import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

const SfContainer = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default SfContainer