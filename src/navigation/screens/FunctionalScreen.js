import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FunctionalScreeen = () => {
    return(
        <View>
            <Text style={styles.textBasic}>Functional Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBasic: {
        color: 'black',
    }
})

export default FunctionalScreeen