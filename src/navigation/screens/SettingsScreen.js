import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
    return(
        <View>
            <Text style={styles.textBasic}>Settings Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBasic: {
        color: 'black',
    }
})

export default SettingsScreen