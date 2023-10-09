import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Movies = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Movies</Text>
        </SafeAreaView>
    )
}

export default Movies
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        height: '100%',
        backgroundColor: '#181A20',
        width: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#38E54D',
    },
})