import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
    const navigation = useNavigation();

    const getStarted = () => {
        navigation.navigate("AuthOptions")
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://res.cloudinary.com/dkibnftac/image/upload/v1696743505/wp8137478_ei7mcp.jpg' }} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Welcome to Animax</Text>
                <Text style={styles.text}>The best streaming anime app of the century to entertain you every day. </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={getStarted}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 15,
        marginBottom: 12,
    },
    text: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 15,
        maxWidth: 350,
        marginBottom: 15,
    }, button: {
        backgroundColor: '#06C149',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 50,
        padding: 12,
        shadowColor: '#06C149',
        shadowOffset: { width: 10, height: 30 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
        maxWidth: 300,
    }
});