import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const ScContainer = (props) => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
})

export default ScContainer